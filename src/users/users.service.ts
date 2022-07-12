import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-users.dto';
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ){}
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  async findOne(condition: any): Promise<Users> {
    return this.usersRepository.findOneBy(condition);
  }
  async register(user: CreateUsersDto) : Promise<Users> {
    if(await this.usersRepository.findOneBy({email: user.email})){
      throw new BadRequestException("duplicate email")
    }
    return await this.usersRepository.save(user);
  }
}
