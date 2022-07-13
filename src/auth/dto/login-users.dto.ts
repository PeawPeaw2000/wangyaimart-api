import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class LoginUsersDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}