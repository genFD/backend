import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { PrismaService } from '~prisma/prisma.service';

@Injectable()
export class FeedbackService {
	constructor(private readonly prisma: PrismaService) {}

	create(feedback: CreateFeedbackDto) {
		return this.prisma.feedback.create({ data: feedback });
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
		if (!feedback)
			throw new NotFoundException(`Cannot find feedback with id ${id}`);
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
