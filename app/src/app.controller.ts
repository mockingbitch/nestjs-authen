// src/app.controller.ts
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,  // Inject AuthService vào AppController
  ) {}

  // POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);  // Sử dụng AuthService để xử lý đăng nhập
  }

  // GET /protected
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return `Hello, ${req.user.username}`;
  }

   // GET /protected
  //  @UseGuards(JwtAuthGuard)
   @Get('test')
   test(@Request() req): string {
     return `Hello `;
   }
}
