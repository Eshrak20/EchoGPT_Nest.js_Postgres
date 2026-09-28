import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CreateProviderModelDto } from './dto/create-provider-model.dto.js';
import { CreateProviderDto } from './dto/create-provider.dto.js';
import { UpdateProviderModelDto } from './dto/update-provider-model.dto.js';
import { UpdateProviderStatusDto } from './dto/update-provider-status.dto.js';
import { UpdateProviderDto } from './dto/update-provider.dto.js';
import { ProvidersService } from './providers.service.js';


@ApiTags('Providers')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('providers')
export class ProvidersController {
  constructor(
    private readonly providersService: ProvidersService,
  ) { }

  @Post()
  @ApiOperation({
    summary: 'Add a new AI provider',
  })
  @ApiResponse({
    status: 201,
    description: 'Provider created successfully',
  })
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.create(createProviderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all AI providers',
  })
  findAll() {
    return this.providersService.findAll();
  }

  @Get(':id/health')
  @ApiOperation({
    summary: 'Check AI provider health',
    description:
      'Checks provider connectivity and API key authentication.',
  })
  @ApiResponse({
    status: 200,
    description: 'Provider health check completed',
  })
  healthCheck(@Param('id') id: string) {
    return this.providersService.healthCheck(id);
  }


  @Patch(':id/default')
  @ApiOperation({
    summary: 'Set provider as the default AI provider',
  })
  setDefault(@Param('id') id: string) {
    return this.providersService.setDefault(id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get provider by ID',
  })
  findOne(@Param('id') id: string) {
    return this.providersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update an AI provider',
  })
  update(
    @Param('id') id: string,
    @Body() updateProviderDto: UpdateProviderDto,
  ) {
    return this.providersService.update(
      id,
      updateProviderDto,
    );
  }
  @Patch(':id/status')
  @ApiOperation({
    summary: 'Enable or disable an AI provider',
  })
  updateStatus(
    @Param('id') id: string,
    @Body() updateProviderStatusDto: UpdateProviderStatusDto,
  ) {
    return this.providersService.updateStatus(
      id,
      updateProviderStatusDto.isActive,
    );
  }
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete an AI provider',
  })
  remove(@Param('id') id: string) {
    return this.providersService.remove(id);
  }
  @Post(':providerId/models')
  @ApiOperation({
    summary: 'Add a model to an AI provider',
  })
  createModel(
    @Param('providerId') providerId: string,
    @Body() dto: CreateProviderModelDto,
  ) {
    return this.providersService.createModel(
      providerId,
      dto,
    );
  }

  @Get(':providerId/models')
  @ApiOperation({
    summary: 'Get all models for an AI provider',
  })
  findAllModels(
    @Param('providerId') providerId: string,
  ) {
    return this.providersService.findAllModels(
      providerId,
    );
  }

  @Patch(':providerId/models/:modelId')
  @ApiOperation({
    summary: 'Update an AI provider model',
  })
  updateModel(
    @Param('providerId') providerId: string,
    @Param('modelId') modelId: string,
    @Body() dto: UpdateProviderModelDto,
  ) {
    return this.providersService.updateModel(
      providerId,
      modelId,
      dto,
    );
  }

  @Delete(':providerId/models/:modelId')
  @ApiOperation({
    summary: 'Delete an AI provider model',
  })
  removeModel(
    @Param('providerId') providerId: string,
    @Param('modelId') modelId: string,
  ) {
    return this.providersService.removeModel(
      providerId,
      modelId,
    );
  }
}