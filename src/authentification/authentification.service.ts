import { HttpException, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { LoginDto } from 'src/dto/login.dto';
import { UserCreateDto } from 'src/dto/userCreate.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthentificationService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: UserCreateDto) {
    const { email, password, firstname, lastname } = data;
    try {
      const hashedPassword = await hash(password, 12);
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
        return newUser;
      } else {
        throw new HttpException({ message: 'Email non unique' }, 401);
      }
    } catch (error) {
      throw new HttpException({ message: error }, 500);
    }
  }

  async login(data: LoginDto) {
    const { email, password } = data;
    try {
      const user = await this.prismaService.user.findUnique({
        where: { email: email },
      });
      if (user) {
        const isPasswordValid = await compare(password, user.password);
        if (isPasswordValid) {
          return user;
        } else {
          throw new HttpException({ message: 'Mot de passe incorrect' }, 401);
        }
      } else {
        throw new HttpException({ message: 'Utilisateur non trouvé' }, 404);
      }
    } catch (error) {
      throw new HttpException({ message: error }, 500);
    }
  }
}
