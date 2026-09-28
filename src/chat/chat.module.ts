import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { ProvidersModule } from '../providers/providers.module.js';
import { SubscriptionsModule } from '../subscriptions/subscriptions.module.js';
import { ChatController } from './chat.controller.js';
import { ChatService } from './chat.service.js';
import { AnthropicProvider } from './providers/anthropic.provider.js';
import { GoogleProvider } from './providers/google.provider.js';
import { OpenAIProvider } from './providers/openai.provider.js';

@Module({
  imports: [
    PrismaModule,
    ProvidersModule,
    SubscriptionsModule,
  ],
  controllers: [ChatController],
  providers: [
    ChatService,
    OpenAIProvider,
    AnthropicProvider,
    GoogleProvider,
  ],
})
export class ChatModule {}