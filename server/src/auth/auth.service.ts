// import { User, UserRole, UserStatus } from '@app/user/user.entity';
// import { UserService } from '@app/user/user.service';
// import { environment } from '@env/environment.dev';

import { BadRequestException, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { DeepPartial } from 'typeorm';
import { environment } from '../../environment/environment.dev';
import { User, UserRole, UserStatus } from '../user/user.entity';
import { UserService } from '../user/user.service';
// import { ChangePasswordCmd } from 'user/cmd/change-password.cmd';
import { TokenUserPayload } from './dto/token-user-payload.dto';
import { TokenDto } from './dto/token.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService) {
  }

  public async signUp(user: User) {
    user.role = UserRole.USER;
    user.status = UserStatus.PENDING;
    user = await this.userService.create(user);
    return this.createToken(user);
  }

  // public async changePassword(cmd: ChangePasswordCmd): Promise<User> {
  //   let oldUser;
  //   try {
  //     oldUser = await this.userService.findOne({email: cmd.email});
  //   } catch (error) {
  //     throw new NotFoundException(`No user was found for email: ${ cmd.email }.`);
  //   }
  //   return this.userService.update(
  //     oldUser.id,
  //     new User({...oldUser, password: cmd.oldPassword}),
  //     cmd.newPassword,
  //   );
  // }

  public async createToken(signedUser: User) {
    const expiresIn = environment.JWT_EXPIRATION;
    const secretOrKey = environment.SECRET_KEY;
    const user = new TokenUserPayload(signedUser);
    const userPOJO = JSON.parse(JSON.stringify(user));
    const accessToken = jwt.sign(userPOJO, secretOrKey, {expiresIn});
    return new TokenDto({
      expiresIn,
      accessToken,
    });
  }

  async login(params: DeepPartial<User>) {
    const foundUser = await this.userService.findOne({email: params.email});
    if (!foundUser) {
      throw new BadRequestException(`Sorry, couldn't log in.`);
    }

    const match = await bcrypt.compare(params.password, foundUser.password);
    if (!match) {
      throw new BadRequestException(`Sorry, couldn't log in.`);
    }

    const payload: JwtPayload = {
      userId: foundUser.id,
      username: foundUser.email,
      roles: [foundUser.role],
    };
    return {
      accessToken: this.jwtService.sign(payload),
      expiresIn: environment.JWT_EXPIRATION,
      userId: foundUser.id
    };
  }
}
