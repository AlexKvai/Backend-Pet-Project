import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  @MinLength(4, { message: 'Полное имя должно содержать минимум 4 символа' })
  @IsString()
  name: string;

  @IsOptional()
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов' })
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  role: string;
}
