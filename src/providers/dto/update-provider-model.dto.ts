import { PartialType } from '@nestjs/swagger';

import { CreateProviderModelDto } from './create-provider-model.dto.js';

export class UpdateProviderModelDto extends PartialType(
  CreateProviderModelDto,
) {}