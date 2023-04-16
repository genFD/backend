import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from '~modules/prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  create(comment: CreateCommentDto) {
    return this.prisma.comment.create({ data: comment });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  async findOne(id: string) {
    const comment = await this.prisma.comment.findUnique({
      where: {
        id,
      },
    });
    if (!id) return null;
    if (!comment) throw new NotFoundException(`Cannot find comment with id ${id}`);
    return comment;
  }

  update(id: string, data: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.comment.delete({
      where: { id },
    });
  }
}
