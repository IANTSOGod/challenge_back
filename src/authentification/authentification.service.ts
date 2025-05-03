import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { LoginDto } from 'src/dto/login.dto';
import { UserCreateDto } from 'src/dto/userCreate.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthentificationService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: UserCreateDto) {
    const { email, password, firstname, lastname } = data;

    const hashedPassword = await hash(password, 12);
    try {
      const newUser = await this.prismaService.user.create({
        data: {
          email: email,
          password: hashedPassword,
          firstname: firstname,
          lastname: lastname,
          role: 'PLAYER',
        },
      });
      if (newUser) {
        return { message: 'User created' };
      }
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException('Email non unique');
    }
  }

  async login(data: LoginDto) {
    const { email, password } = data;
    const user = await this.prismaService.user.findUnique({
      where: { email: email },
    });
    if (user) {
      const isPasswordValid = await compare(password, user.password);
      if (isPasswordValid) {
        return user;
      } else {
        throw new UnauthorizedException('Mot de passe invalide');
      }
    } else {
      throw new NotFoundException('User non trouvé');
    }
  }
}
