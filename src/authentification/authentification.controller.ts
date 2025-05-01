import { Body, Controller, Post } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { UserCreateDto } from 'src/dto/userCreate.dto';
import { LoginDto } from 'src/dto/login.dto';

@Controller('authentification')
export class AuthentificationController {
  constructor(
    private readonly authentificationService: AuthentificationService,
  ) {}

  @Post('signup')
  async Signup(@Body() data: UserCreateDto) {
    return this.authentificationService.createUser(data);
  }

  @Post('login')
  async Login(@Body() data: LoginDto) {
    return this.authentificationService.login(data);
  }
}
