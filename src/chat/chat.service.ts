import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { ProvidersService } from '../providers/providers.service.js';
import { SubscriptionsService } from '../subscriptions/subscriptions.service.js';
import { SendMessageDto } from './dto/send-message.dto.js';
import { AnthropicProvider } from './providers/anthropic.provider.js';
import { GoogleProvider } from './providers/google.provider.js';
import { OpenAIProvider } from './providers/openai.provider.js';

@Injectable()
export class ChatService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly providersService: ProvidersService,
        private readonly subscriptionsService: SubscriptionsService,
        private readonly openAIProvider: OpenAIProvider,
        private readonly anthropicProvider: AnthropicProvider,
        private readonly googleProvider: GoogleProvider,
    ) { }

    async sendMessage(userId: string, dto: SendMessageDto) {
        // 1. Check subscription availability


        const remaining =
            await this.subscriptionsService.getRemainingRequests(userId);

        if (remaining.remaining <= 0) {
            throw new BadRequestException(
                'Monthly request limit reached',
            );
        }

        // 2. Get provider configuration
        const provider =
            await this.providersService.getModelConfiguration(
                dto.providerModelId,
            );

        // 3. Find or create conversation
        let conversation;

        if (dto.conversationId) {
            conversation = await this.prisma.conversation.findFirst({
                where: {
                    id: dto.conversationId,
                    userId,
                },
                include: {
                    messages: {
                        orderBy: {
                            createdAt: 'asc',
                        },
                    },
                },
            });

            if (!conversation) {
                throw new NotFoundException(
                    'Conversation not found',
                );
            }
        } else {
            conversation = await this.prisma.conversation.create({
                data: {
                    userId,
                    title: dto.message.substring(0, 100),
                },
                include: {
                    messages: true,
                },
            });
        }

        // 4. Convert database messages
        const messages = conversation.messages.map((message) => ({
            role: message.role.toLowerCase() as
                | 'system'
                | 'user'
                | 'assistant',
            content: message.content,
        }));

        // 5. Add current user message
        messages.push({
            role: 'user',
            content: dto.message,
        });

        // 6. Select AI provider
        let aiResponse;

        switch (provider.providerType) {
            case 'OPENAI':
                aiResponse = await this.openAIProvider.generateResponse(
                    messages,
                    provider.modelId,
                    provider.apiKey,
                    provider.apiBaseUrl,
                );
                break;

            case 'ANTHROPIC':
                aiResponse =
                    await this.anthropicProvider.generateResponse(
                        messages,
                        provider.modelId,
                        provider.apiKey,
                        provider.apiBaseUrl,
                    );
                break;

            case 'GOOGLE':
                aiResponse =
                    await this.googleProvider.generateResponse(
                        messages,
                        provider.modelId,
                        provider.apiKey,
                        provider.apiBaseUrl,
                    );
                break;

            default:
                throw new BadRequestException(
                    'Unsupported provider type',
                );
        }

        // 7. Save user message
        await this.prisma.message.create({
            data: {
                conversationId: conversation.id,
                role: 'USER',
                content: dto.message,
                providerModelId: dto.providerModelId,
            },
        });

        // 8. Save AI response
        const assistantMessage =
            await this.prisma.message.create({
                data: {
                    conversationId: conversation.id,
                    role: 'ASSISTANT',
                    content: aiResponse.content,
                    providerModelId: dto.providerModelId,
                },
            });

        // 9. Update conversation timestamp
        await this.prisma.conversation.update({
            where: {
                id: conversation.id,
            },
            data: {
                updatedAt: new Date(),
            },
        });

        // 10. Consume request
        await this.subscriptionsService.consumeRequest(userId);

        return {
            conversationId: conversation.id,
            message: assistantMessage,
        };
    }
    async getConversations(userId: string) {
        return this.prisma.conversation.findMany({
            where: {
                userId,
            },
            orderBy: {
                updatedAt: 'desc',
            },
            select: {
                id: true,
                title: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async getConversation(
        userId: string,
        conversationId: string,
    ) {
        const conversation =
            await this.prisma.conversation.findFirst({
                where: {
                    id: conversationId,
                    userId,
                },
                include: {
                    messages: {
                        orderBy: {
                            createdAt: 'asc',
                        },
                        select: {
                            id: true,
                            role: true,
                            content: true,
                            providerModelId: true,
                            createdAt: true,
                        },
                    },
                },
            });

        if (!conversation) {
            throw new NotFoundException(
                'Conversation not found',
            );
        }

        return conversation;
    }
    async deleteConversation(
        userId: string,
        conversationId: string,
    ) {
        const conversation =
            await this.prisma.conversation.findFirst({
                where: {
                    id: conversationId,
                    userId,
                },
            });

        if (!conversation) {
            throw new NotFoundException(
                'Conversation not found',
            );
        }

        await this.prisma.conversation.delete({
            where: {
                id: conversationId,
            },
        });

        return {
            message: 'Conversation deleted successfully',
        };
    }
    async streamMessage(
        userId: string,
        dto: SendMessageDto,
        onChunk: (chunk: string) => void,
    ) {
        const remaining =
            await this.subscriptionsService.getRemainingRequests(
                userId,
            );

        if (remaining.remaining <= 0) {
            throw new BadRequestException(
                'Monthly request limit reached',
            );
        }

        const provider =
            await this.providersService.getModelConfiguration(
                dto.providerModelId,
            );

        if (provider.providerType !== 'GOOGLE') {
            throw new BadRequestException(
                'Streaming is currently supported only for Google Gemini',
            );
        }

        let conversation;

        if (dto.conversationId) {
            conversation =
                await this.prisma.conversation.findFirst({
                    where: {
                        id: dto.conversationId,
                        userId,
                    },
                    include: {
                        messages: {
                            orderBy: {
                                createdAt: 'asc',
                            },
                        },
                    },
                });

            if (!conversation) {
                throw new NotFoundException(
                    'Conversation not found',
                );
            }
        } else {
            conversation =
                await this.prisma.conversation.create({
                    data: {
                        userId,
                        title: dto.message.substring(0, 100),
                    },
                    include: {
                        messages: true,
                    },
                });
        }

        const messages = conversation.messages.map(
            (message) => ({
                role:
                    message.role.toLowerCase() as
                    | 'system'
                    | 'user'
                    | 'assistant',
                content: message.content,
            }),
        );

        messages.push({
            role: 'user',
            content: dto.message,
        });

        let fullResponse = '';

        await this.googleProvider.generateStream(
            messages,
            provider.modelId,
            provider.apiKey,
            provider.apiBaseUrl,
            (chunk) => {
                fullResponse += chunk;

                onChunk(chunk);
            },
        );

        await this.prisma.message.create({
            data: {
                conversationId: conversation.id,
                role: 'USER',
                content: dto.message,
                providerModelId: dto.providerModelId,
            },
        });

        const assistantMessage =
            await this.prisma.message.create({
                data: {
                    conversationId: conversation.id,
                    role: 'ASSISTANT',
                    content: fullResponse,
                    providerModelId: dto.providerModelId,
                },
            });

        await this.prisma.conversation.update({
            where: {
                id: conversation.id,
            },
            data: {
                updatedAt: new Date(),
            },
        });

        await this.subscriptionsService.consumeRequest(
            userId,
        );

        return {
            conversationId: conversation.id,
            message: assistantMessage,
        };
    }
}