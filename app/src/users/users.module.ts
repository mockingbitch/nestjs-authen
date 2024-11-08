// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../entities/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([User])],  // Đảm bảo User repository được cung cấp
  providers: [UsersService],
  exports: [UsersService],  // Export UsersService để có thể sử dụng ở các module khác
})
export class UsersModule {}
