import {
    CanActivate,
    ExecutionContext,
    Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '../../generated/prisma/client.js';
export interface AuthenticatedRequest extends Request {
    user: {
        id: string;
        role: UserRole;
    };
}
@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
    ) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles =
            this.reflector.getAllAndOverride<UserRole[]>(
                'roles',
                [
                    context.getHandler(),
                    context.getClass(),
                ],
            );

        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }

        const request =
            context.switchToHttp().getRequest<AuthenticatedRequest>();

        const user = request.user;

        if (!user) {
            return false;
        }

        return requiredRoles.includes(user.role);
    }
}