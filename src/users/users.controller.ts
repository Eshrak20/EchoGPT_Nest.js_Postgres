import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    ParseUUIDPipe,
    Patch,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiQuery,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { UserRole } from '../generated/prisma/index.js';
import { Roles } from './decorators/roles.decorator.js';
import { ChangePasswordDto } from './dto/change-password.dto.js';
import { DeleteAccountDto } from './dto/delete-account.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { UpdateRoleDto } from './dto/update-role.dto.js';
import { UpdateUserStatusDto } from './dto/update-user-status.dto.js';
import { RolesGuard } from './guards/roles.guard.js';
import { UsersService } from './users.service.js';



interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    email: string;
    role: {
      name: UserRole;
    };
  };
}

@ApiTags('Users')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  // GET /api/users/me
  @Get('me')
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({ status: 200, description: 'User profile retrieved' })
  getProfile(@Req() req: AuthenticatedRequest) {
    return this.usersService.getProfile(req.user.id);
  }

  // PATCH /api/users/me
  @Patch('me')
  @ApiOperation({ summary: 'Update current user profile' })
  @ApiResponse({ status: 200, description: 'Profile updated' })
  updateProfile(
    @Req() req: AuthenticatedRequest,
    @Body() dto: UpdateProfileDto,
  ) {
    return this.usersService.updateProfile(
      req.user.id,
      dto,
    );
  }

  // PATCH /api/users/me/password
  @Patch('me/password')
  @ApiOperation({ summary: 'Change current user password' })
  @ApiResponse({ status: 200, description: 'Password changed' })
  @ApiResponse({ status: 401, description: 'Current password incorrect' })
  changePassword(
    @Req() req: AuthenticatedRequest,
    @Body() dto: ChangePasswordDto,
  ) {
    return this.usersService.changePassword(
      req.user.id,
      dto.currentPassword,
      dto.newPassword,
    );
  }

  // DELETE /api/users/me
  @Delete('me')
  @ApiOperation({ summary: 'Delete current user account' })
  @ApiResponse({ status: 200, description: 'Account deleted' })
  deleteAccount(
    @Req() req: AuthenticatedRequest,
    @Body() dto: DeleteAccountDto
  ) {
    return this.usersService.deleteAccount(
      req.user.id,
      dto.currentPassword,
    );
  }

  // GET /api/users?page=1&limit=10
  @Get()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Admin: list all users' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  getAllUsers(
    @Query('page', new ParseIntPipe({ optional: true }))
    page = 1,
    @Query('limit', new ParseIntPipe({ optional: true }))
    limit = 10,
  ) {
    const safePage = Math.max(1, page);
    const safeLimit = Math.min(100, Math.max(1, limit));

    return this.usersService.getAllUsers(
      safePage,
      safeLimit,
    );
  }

  // GET /api/users/:id
  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Admin: get user by ID' })
  getUserById(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.usersService.getUserById(id);
  }

  // PATCH /api/users/:id/role
  @Patch(':id/role')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Admin: update user role' })
  updateUserRole(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateRoleDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.usersService.updateUserRole(
      id,
      dto.role,
      req.user.id,
    );
  }

  // PATCH /api/users/:id/status
  @Patch(':id/status')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Admin: activate or deactivate user' })
  updateUserStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateUserStatusDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.usersService.updateUserStatus(
      id,
      dto.isActive,
      req.user.id,
    );
  }
}