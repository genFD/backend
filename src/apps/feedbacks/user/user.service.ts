import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserDto } from '~user/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '~modules/prisma/prisma.service';
import { PinoLoggerService } from '~logger/pinoLogger.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private logger: PinoLoggerService) {
    this.logger.setContext('UserService');
  }

  create(user: CreateUserDto) {
    return this.prisma.user_Feedback.create({ data: user });
  }

  findAll() {
    this.logger.log(`Retrieve all feedbacks users`);
    return this.prisma.user_Feedback.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user_Feedback.findUnique({
      where: {
        id,
      },
    });
    if (!id) return null;
    if (!user) throw new NotFoundException(`Cannot find user with id ${id}`);
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.prisma.user_Feedback.findUnique({
      where: {
        email,
      },
    });
    if (!email) return null;
    if (!user) throw new NotFoundException(`Cannot find user with email ${email}`);
    return user;
  }

  update(id: string, data: UpdateUserDto) {
    return this.prisma.user_Feedback.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.user_Feedback.delete({
      where: { id },
    });
  }
}
