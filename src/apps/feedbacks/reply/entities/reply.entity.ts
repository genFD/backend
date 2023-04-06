import { ApiProperty } from '@nestjs/swagger';
import { Reply } from '@prisma/client';

export class Replies implements Reply {
	@ApiProperty()
	id: string;

	@ApiProperty()
	content: string;

	@ApiProperty()
	user_id: string;

	@ApiProperty()
	comment_id: string;

	@ApiProperty()
	created_at: Date;
}
