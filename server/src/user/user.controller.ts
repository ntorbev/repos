import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TokenDto } from '../auth/dto/token.dto';
import { UserService } from './user.service';

@Controller('repos')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  @ApiOperation({title: 'Get-repos', description: 'get all repos'})
  @ApiResponse({description: 'Success!', status: HttpStatus.OK, type: TokenDto})
  @ApiResponse({description: 'Bad request.', status: HttpStatus.BAD_REQUEST})
  public async findAll() {
    return await this.userService.findAll();
  }
}
