import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_WRITE_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};

export default config;
