import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '~prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	create(user: CreateUserDto) {
		return this.prisma.user_Feedback.create({ data: user });
	}

	findAll() {
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
