import { Module } from '@nestjs/common';

import { ProvidersEncryptionService } from './providers-encryption.service.js';
import { ProvidersController } from './providers.controller.js';
import { ProvidersService } from './providers.service.js';

@Module({
  controllers: [ProvidersController],
  providers: [
    ProvidersService,
    ProvidersEncryptionService,
  ],
  exports: [ProvidersService],
})
export class ProvidersModule {}