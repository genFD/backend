import { ApiProperty } from '@nestjs/swagger';
import { Upvote } from '@prisma/client';

export class Upvotes implements Upvote {
	@ApiProperty()
	id: string;

	@ApiProperty()
	user_id: string;

	@ApiProperty()
	feedback_id: string;

	@ApiProperty()
	createdAt: Date;
}
