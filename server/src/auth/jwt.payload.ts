import { UserRole } from '../user/user.entity';

export interface JwtPayload {
    userId: string;
    username: string;
    roles: UserRole[];
}
