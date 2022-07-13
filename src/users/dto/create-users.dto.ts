import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @Length(2, 50)
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @Length(2, 50)
  @IsNotEmpty()
  lastname: string;

  @IsEmail()
  @IsNotEmpty()
  @Matches(
    /^[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    { message: 'email is invalid' },
  )
  email: string;

  @IsString()
  @Length(6, 20)
  @IsNotEmpty()
  password: string;
}
