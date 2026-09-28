import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import type { Request, Response } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { ChatService } from './chat.service.js';
import { SendMessageDto } from './dto/send-message.dto.js';

interface AuthenticatedRequest extends Request {
    user: {
        id: string;
    };
}

@ApiTags('Chat')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('chat')
export class ChatController {
    constructor(
        private readonly chatService: ChatService,
    ) { }

    // ==========================================
    // Send Message
    // ==========================================

    @Post()
    @ApiOperation({
        summary: 'Send a message to an AI provider',
    })
    @ApiResponse({
        status: 201,
        description: 'AI response generated successfully',
    })
    @ApiResponse({
        status: 502,
        description: 'AI provider error',
    })
    @ApiResponse({
        status: 504,
        description: 'AI provider request timed out',
    })
    async sendMessage(
        @Req() req: AuthenticatedRequest,
        @Body() dto: SendMessageDto,
    ) {
        return this.chatService.sendMessage(
            req.user.id,
            dto,
        );
    }

    // ==========================================
    // Get Conversations
    // ==========================================

    @Get('conversations')
    @ApiOperation({
        summary: 'Get current user conversations',
    })
    @ApiResponse({
        status: 200,
        description: 'List of user conversations',
    })
    async getConversations(
        @Req() req: AuthenticatedRequest,
    ) {
        return this.chatService.getConversations(
            req.user.id,
        );
    }

    // ==========================================
    // Get Conversation History
    // ==========================================

    @Get('conversations/:id')
    @ApiOperation({
        summary: 'Get conversation with message history',
    })
    @ApiParam({
        name: 'id',
        description: 'Conversation ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    })
    @ApiResponse({
        status: 200,
        description: 'Conversation history',
    })
    @ApiResponse({
        status: 404,
        description: 'Conversation not found',
    })
    async getConversation(
        @Req() req: AuthenticatedRequest,
        @Param('id') id: string,
    ) {
        return this.chatService.getConversation(
            req.user.id,
            id,
        );
    }
    @Post('stream')
    @ApiOperation({
        summary: 'Stream AI response from Google Gemini',
    })
    @ApiResponse({
        status: 200,
        description: 'AI response streamed successfully',
    })
    async streamMessage(
        @Req() req: AuthenticatedRequest,
        @Body() dto: SendMessageDto,
        @Res() res: Response,
    ) {
        res.setHeader(
            'Content-Type',
            'text/event-stream',
        );

        res.setHeader(
            'Cache-Control',
            'no-cache',
        );

        res.setHeader(
            'Connection',
            'keep-alive',
        );

        res.flushHeaders();

        try {
            const result =
                await this.chatService.streamMessage(
                    req.user.id,
                    dto,
                    (chunk) => {
                        res.write(
                            `data: ${JSON.stringify({
                                type: 'chunk',
                                content: chunk,
                            })}\n\n`,
                        );
                    },
                );

            res.write(
                `data: ${JSON.stringify({
                    type: 'done',
                    conversationId:
                        result.conversationId,
                    messageId: result.message.id,
                })}\n\n`,
            );

            res.end();
        } catch (error) {
            console.error(
                'Streaming chat error:',
                error,
            );

            res.write(
                `data: ${JSON.stringify({
                    type: 'error',
                    message:
                        error instanceof Error
                            ? error.message
                            : 'Streaming failed',
                })}\n\n`,
            );

            res.end();
        }
    }
    // ==========================================
    // Delete Conversation
    // ==========================================

    @Delete('conversations/:id')
    @ApiOperation({
        summary: 'Delete a conversation',
    })
    @ApiParam({
        name: 'id',
        description: 'Conversation ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    })
    @ApiResponse({
        status: 200,
        description: 'Conversation deleted successfully',
    })
    @ApiResponse({
        status: 404,
        description: 'Conversation not found',
    })
    async deleteConversation(
        @Req() req: AuthenticatedRequest,
        @Param('id') id: string,
    ) {
        return this.chatService.deleteConversation(
            req.user.id,
            id,
        );
    }
}