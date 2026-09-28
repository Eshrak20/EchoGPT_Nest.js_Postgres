import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';

import { ProviderType } from '../generated/prisma/index.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProviderModelDto } from './dto/create-provider-model.dto.js';
import { CreateProviderDto } from './dto/create-provider.dto.js';
import { UpdateProviderModelDto } from './dto/update-provider-model.dto.js';
import { UpdateProviderDto } from './dto/update-provider.dto.js';
import { ProvidersEncryptionService } from './providers-encryption.service.js';
interface ProviderHealthResult {
  healthy: boolean;
  message: string;
}
@Injectable()
export class ProvidersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly encryptionService: ProvidersEncryptionService,
  ) { }
  async healthCheck(id: string) {
    const provider = await this.prisma.provider.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        type: true,
        apiKey: true,
        apiBaseUrl: true,
        isActive: true,
      },
    });

    if (!provider) {
      throw new NotFoundException('Provider not found');
    }

    if (!provider.isActive) {
      throw new ConflictException(
        'Cannot health check a disabled provider',
      );
    }

    if (!provider.apiKey) {
      throw new BadRequestException(
        'Provider API key is not configured',
      );
    }

    const apiKey = this.encryptionService.decrypt(
      provider.apiKey,
    );

    try {
      const result = await this.checkProviderConnection(
        provider.type,
        apiKey,
        provider.apiBaseUrl,
      );

      return {
        providerId: provider.id,
        provider: provider.name,
        type: provider.type,
        status: result.healthy ? 'HEALTHY' : 'UNHEALTHY',
        message: result.message,
        checkedAt: new Date(),
      };
    } catch {
      return {
        providerId: provider.id,
        provider: provider.name,
        type: provider.type,
        status: 'UNHEALTHY',
        message: 'Unable to connect to the AI provider',
        checkedAt: new Date(),
      };
    }
  }
  async create(createProviderDto: CreateProviderDto) {
    const existingProvider =
      await this.prisma.provider.findFirst({
        where: {
          type: createProviderDto.type,
        },
      });

    if (existingProvider) {
      throw new ConflictException(
        `Provider of type ${createProviderDto.type} already exists`,
      );
    }

    const encryptedApiKey =
      createProviderDto.apiKey
        ? this.encryptionService.encrypt(
          createProviderDto.apiKey,
        )
        : null;

    return this.prisma.provider.create({
      data: {
        name: createProviderDto.name,
        type: createProviderDto.type,
        apiBaseUrl: createProviderDto.apiBaseUrl,
        apiKey: encryptedApiKey,
      },
    });
  }

  async setDefault(id: string) {
    const provider = await this.prisma.provider.findUnique({
      where: {
        id,
      },
    });

    if (!provider) {
      throw new NotFoundException('Provider not found');
    }

    if (!provider.isActive) {
      throw new ConflictException(
        'An inactive provider cannot be set as default',
      );
    }

    await this.prisma.$transaction([
      this.prisma.provider.updateMany({
        where: {
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      }),

      this.prisma.provider.update({
        where: {
          id,
        },
        data: {
          isDefault: true,
        },
      }),
    ]);

    return this.prisma.provider.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        type: true,
        isActive: true,
        isDefault: true,
        apiBaseUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }


  async findAll() {
    return this.prisma.provider.findMany({
      select: {
        apiKey: false,
        id: true,
        name: true,
        type: true,
        isActive: true,
        isDefault: true,
        apiBaseUrl: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  async findOne(id: string) {
    const provider = await this.prisma.provider.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        type: true,
        isActive: true,
        isDefault: true,
        apiBaseUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!provider) {
      throw new NotFoundException('Provider not found');
    }

    return provider;
  }
  async update(
    id: string,
    updateProviderDto: UpdateProviderDto,
  ) {
    await this.findOne(id);

    const data = {
      ...updateProviderDto,
    };

    if (updateProviderDto.apiKey) {
      data.apiKey = this.encryptionService.encrypt(
        updateProviderDto.apiKey,
      );
    }

    return this.prisma.provider.update({
      where: {
        id,
      },
      data,
      select: {
        id: true,
        name: true,
        type: true,
        isActive: true,
        apiBaseUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
  async updateStatus(id: string, isActive: boolean) {
    await this.findOne(id);

    return this.prisma.provider.update({
      where: {
        id,
      },
      data: {
        isActive,
      },
      select: {
        id: true,
        name: true,
        type: true,
        isActive: true,
        apiBaseUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
  async remove(id: string) {
    await this.findOne(id);

    await this.prisma.provider.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Provider deleted successfully',
    };
  }

  async createModel(
    providerId: string,
    dto: CreateProviderModelDto,
  ) {
    const provider = await this.prisma.provider.findUnique({
      where: { id: providerId },
      select: {
        id: true,
        isActive: true,
      },
    });

    if (!provider) {
      throw new NotFoundException('Provider not found');
    }

    const existingModel =
      await this.prisma.providerModel.findFirst({
        where: {
          providerId,
          modelId: dto.modelId,
        },
      });

    if (existingModel) {
      throw new ConflictException(
        'This model is already registered with the provider',
      );
    }

    return this.prisma.providerModel.create({
      data: {
        providerId,
        name: dto.name,
        modelId: dto.modelId,
        isActive: dto.isActive ?? true,
      },
      select: {
        id: true,
        providerId: true,
        name: true,
        modelId: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
  async findAllModels(providerId: string) {
    // Check if provider exists
    const provider = await this.prisma.provider.findUnique({
      where: { id: providerId },
      select: { id: true },
    });

    if (!provider) {
      throw new NotFoundException('Provider not found');
    }

    // Get models for this provider
    const models = await this.prisma.providerModel.findMany({
      where: { providerId },
      select: {
        id: true,
        providerId: true,
        name: true,
        modelId: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Check if provider has any models
    if (models.length === 0) {
      throw new NotFoundException('No models found for this provider');
    }

    return models;
  }
  async updateModel(
    providerId: string,
    modelId: string,
    dto: UpdateProviderModelDto,
  ) {
    const model = await this.prisma.providerModel.findFirst({
      where: {
        id: modelId,
        providerId,
      },
    });

    if (!model) {
      throw new NotFoundException(
        'Provider model not found',
      );
    }

    if (dto.modelId && dto.modelId !== model.modelId) {
      const duplicate =
        await this.prisma.providerModel.findFirst({
          where: {
            providerId,
            modelId: dto.modelId,
            NOT: {
              id: modelId,
            },
          },
        });

      if (duplicate) {
        throw new ConflictException(
          'This model ID is already registered with the provider',
        );
      }
    }

    return this.prisma.providerModel.update({
      where: {
        id: modelId,
      },
      data: {
        name: dto.name,
        modelId: dto.modelId,
        isActive: dto.isActive,
      },
      select: {
        id: true,
        providerId: true,
        name: true,
        modelId: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
  async removeModel(
    providerId: string,
    modelId: string,
  ) {
    const model = await this.prisma.providerModel.findFirst({
      where: {
        id: modelId,
        providerId,
      },
    });

    if (!model) {
      throw new NotFoundException(
        'Provider model not found',
      );
    }

    await this.prisma.providerModel.delete({
      where: {
        id: modelId,
      },
    });

    return {
      message: 'Provider model deleted successfully',
    };
  }
  async getModelConfiguration(providerModelId: string) {
    const providerModel = await this.prisma.providerModel.findUnique({
      where: {
        id: providerModelId,
      },
      include: {
        provider: true,
      },
    });

    if (!providerModel) {
      throw new NotFoundException('Provider model not found');
    }

    if (!providerModel.isActive) {
      throw new BadRequestException('Provider model is inactive');
    }

    if (!providerModel.provider.isActive) {
      throw new BadRequestException('Provider is inactive');
    }

    if (!providerModel.provider.apiKey) {
      throw new BadRequestException('Provider API key is not configured');
    }

    return {
      providerType: providerModel.provider.type,
      modelId: providerModel.modelId,
      apiKey: this.encryptionService.decrypt(
        providerModel.provider.apiKey,
      ),
      apiBaseUrl: providerModel.provider.apiBaseUrl,
    };
  }
  private async checkProviderConnection(
    type: ProviderType,
    apiKey: string,
    apiBaseUrl: string | null,
  ): Promise<ProviderHealthResult> {
    let url: string;
    let headers: Record<string, string> = {};

    switch (type) {
      case ProviderType.OPENAI: {
        const baseUrl =
          apiBaseUrl ?? 'https://api.openai.com/v1';

        url = `${baseUrl.replace(/\/+$/, '')}/models`;

        headers = {
          Authorization: `Bearer ${apiKey}`,
        };

        break;
      }

      case ProviderType.ANTHROPIC: {
        const baseUrl =
          apiBaseUrl ?? 'https://api.anthropic.com';

        url = `${baseUrl.replace(/\/+$/, '')}/v1/models`;

        headers = {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        };

        break;
      }

      case ProviderType.GOOGLE: {
        const baseUrl =
          apiBaseUrl ??
          'https://generativelanguage.googleapis.com/v1beta';

        url = `${baseUrl.replace(/\/+$/, '')}/models`;

        headers = {
          'x-goog-api-key': apiKey,
        };

        break;
      }

      default:
        throw new BadRequestException(
          'Health check is not supported for this provider',
        );
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
      signal: AbortSignal.timeout(10000),
    });

    if (response.ok) {
      return {
        healthy: true,
        message: 'Provider connection successful',
      };
    }

    if (response.status === 401 || response.status === 403) {
      return {
        healthy: false,
        message: 'API key is invalid or does not have permission',
      };
    }

    if (response.status === 429) {
      return {
        healthy: false,
        message: 'Provider rate limit or quota exceeded',
      };
    }

    return {
      healthy: false,
      message: `Provider returned HTTP ${response.status}`,
    };
  }
}