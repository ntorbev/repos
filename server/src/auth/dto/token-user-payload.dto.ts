import { ApiModelProperty } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';
import { IUser } from '../../user/interface/user.interface';
import { UserRole, UserStatus } from '../../user/user.entity';

export class TokenUserPayload {
  @ApiModelProperty() sub: string;
  @ApiModelProperty() email: string;
  @ApiModelProperty() firstname: string;
  @ApiModelProperty() lastname: string;
  @ApiModelProperty() role: UserRole;
  @ApiModelProperty() status: UserStatus;

  constructor(data: IUser) {
    this.sub = data.id;
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.role = data.role;
    this.status = data.status;
  }
}
