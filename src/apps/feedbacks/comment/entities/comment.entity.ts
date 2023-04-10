import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '@prisma/client';

export class Comments implements Comment {
	@ApiProperty()
	id: string;

	@ApiProperty()
	content: string;

	@ApiProperty()
	user_id: string;

	@ApiProperty()
	feedback_id: string;

	@ApiProperty()
	created_at: Date;
}
