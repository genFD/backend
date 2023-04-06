import { ApiProperty } from '@nestjs/swagger';
import { Feedback } from '@prisma/client';

export class Feedbacks implements Feedback {
	@ApiProperty()
	id: string;

	@ApiProperty()
	title: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	category: string;

	@ApiProperty()
	status: string;

	@ApiProperty()
	user_id: string;

	@ApiProperty()
	createdAt: Date;

	@ApiProperty()
	updatedAt: Date;
}
