import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'email non vide' })
  @IsEmail({}, { message: 'Email non valide' })
  email: string;
  @IsNotEmpty({ message: 'Mot de passe non vide' })
  password: string;
}
