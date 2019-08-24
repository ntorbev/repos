import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import 'dotenv/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { environment } from '../../environment/environment.dev';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: environment.SECRET_KEY,
        });
    }

    async validate(jwtPayload: JwtPayload) {
      return { userId: jwtPayload.userId, username: jwtPayload.username };
    }
}
