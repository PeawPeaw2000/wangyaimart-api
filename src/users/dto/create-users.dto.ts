import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @Length(2, 50)
  firstname: string;

  @IsEmail()
  @Matches(
    /^[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    { message: 'email is invalid' },
  )
  lastname: string;
  email: string;

  @IsString()
  @Length(6, 20)
  password: string;
}
