import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { PrismaService } from '~modules/prisma/prisma.service';
import { User } from '~user/entities/user.entity';
@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  create(feedback: CreateFeedbackDto, id: string) {
    return this.prisma.feedback.create({
      data: {
        ...feedback,
        user_id: id,
      },
    });
  }

  findAll() {
    return this.prisma.feedback.findMany();
  }

  async findOne(id: string) {
    const feedback = await this.prisma.feedback.findUnique({
      where: {
        id,
      },
    });
    if (!id) return null;
    if (!feedback) throw new NotFoundException(`Cannot find feedback with id ${id}`);
    return feedback;
  }

  update(id: string, data: UpdateFeedbackDto) {
    return this.prisma.feedback.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.feedback.delete({
      where: { id },
    });
  }
}
