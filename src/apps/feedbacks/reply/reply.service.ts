import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { PrismaService } from '~prisma/prisma.service';

@Injectable()
export class ReplyService {
	constructor(private readonly prisma: PrismaService) {}

	create(reply: CreateReplyDto) {
		return this.prisma.reply.create({ data: reply });
	}

	findAll() {
		return this.prisma.reply.findMany();
	}

	async findOne(id: string) {
		const reply = await this.prisma.reply.findUnique({
			where: {
				id,
			},
		});
		if (!id) return null;
		if (!reply) throw new NotFoundException(`Cannot find reply with id ${id}`);
		return reply;
	}

	update(id: string, data: UpdateReplyDto) {
		return this.prisma.reply.update({
			where: { id },
			data,
		});
	}

	remove(id: string) {
		return this.prisma.reply.delete({
			where: { id },
		});
	}
}
