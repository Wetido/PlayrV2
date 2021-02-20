import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signUp')
  signUp(@Body() authRegister: any): Promise<Users> {
    return this.usersService.signUp(authRegister);
  }

  @Post('/login')
  logIn(@Body() loginRegister: any): Promise<string> {
    return this.usersService.logIn(loginRegister);
  }
}
