import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов' })
  @IsString()
  password: string;
}

export class RegDto {
  @IsEmail()
  email: string;

  @MinLength(4, { message: 'Полное имя должно содержать минимум 4 символа' })
  @IsString()
  name: string;

  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов' })
  @IsString()
  password: string;
}
