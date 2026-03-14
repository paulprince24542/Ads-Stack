import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login-admin.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
// import { PinoLogger } from 'nestjs-pino';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    // private readonly logger: PinoLogger
  ) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('profile')
  getProfile() {
    return 'Authorized';
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('test')
  test(@Req() req: Request) {
    console.log('Authorization Header:', req.headers);
    // this.logger.info('Grafana test log');
    return 'Check console';
  }
}
