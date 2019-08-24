import { ApiModelProperty } from '@nestjs/swagger';

export class AuthLoginCmd {
  @ApiModelProperty() email: string;
  @ApiModelProperty() password: string;
}
