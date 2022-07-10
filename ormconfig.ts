import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';

require('dotenv').config();

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_WRITE_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Users],
};

export default config;
