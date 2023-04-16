import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '~modules/prisma/prisma.service';
import { UserNotFoundException } from '~exceptions/userNotFound.exception';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(user: CreateUserDto) {
    return this.prisma.user.create({ data: user });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!id) return null;
    if (!user) throw new UserNotFoundException();
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  update(id: string, data: UpdateUserDto) {
    return this.prisma.user_Invoice.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.user_Invoice.delete({
      where: { id },
    });
  }
}
