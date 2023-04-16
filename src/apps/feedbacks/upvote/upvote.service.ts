import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUpvoteDto } from './dto/create-upvote.dto';
import { UpdateUpvoteDto } from './dto/update-upvote.dto';
import { PrismaService } from '~modules/prisma/prisma.service';

@Injectable()
export class UpvoteService {
  constructor(private readonly prisma: PrismaService) {}

  create(upvote: CreateUpvoteDto) {
    return this.prisma.upvote.create({ data: upvote });
  }

  findAll() {
    return this.prisma.upvote.findMany();
  }

  async findOne(id: string) {
    const upvote = await this.prisma.upvote.findUnique({
      where: {
        id,
      },
    });
    if (!id) return null;
    if (!upvote) throw new NotFoundException(`Cannot find upvote with id ${id}`);
    return upvote;
  }

  update(id: string, data: UpdateUpvoteDto) {
    return this.prisma.upvote.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.upvote.delete({
      where: { id },
    });
  }
}
