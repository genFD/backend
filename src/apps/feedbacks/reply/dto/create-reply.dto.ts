import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateReplyDto {
	@ApiProperty()
	@IsString()
	content: string;

	@ApiProperty()
	@IsString()
	user_id: string;

	@ApiProperty()
	@IsString()
	comment_id: string;
}
