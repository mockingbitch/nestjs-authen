// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) // Inject UserRepository
    private readonly userRepository: EntityRepository<User>, 
    private readonly em: EntityManager,  // Inject EntityManager
  ) {}

  private readonly users = [
    { userId: 1, username: 'john', password: '$2a$10$zB02f0AWP9dcoZbAsZT1LuSPF4.PN0AOx0V7lj3DlL2AqV5S4oOb2' }, // mật khẩu đã mã hóa bằng bcrypt
  ];

  async findByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }

  async findOne(username: string): Promise<User | null> {
    return this.userRepository.findOne({ username });
  }

  async create(username: string, password: string): Promise<User> {
    const user = new User();
    user.username = username;
    user.password = password;
    await this.em.persistAndFlush(user); // Sử dụng EntityManager
    return user;
  }
}
