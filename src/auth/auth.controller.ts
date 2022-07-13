import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/dto/create-users.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  
    @Post('register')
    async register(@Body() user: CreateUsersDto) {
      return this.authService.register(user)
    }
}
