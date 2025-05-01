import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty({ message: 'email non vide' })
  @IsEmail({}, { message: ' email non valide' })
  email: string;
  @IsNotEmpty({ message: 'mot de passe non vide' })
  password: string;
  @IsNotEmpty({ message: 'nom non vide' })
  firstname: string;
  @IsNotEmpty({ message: 'prenom non vide' })
  lastname: string;
}
