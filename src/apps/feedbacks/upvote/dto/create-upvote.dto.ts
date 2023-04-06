import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUpvoteDto {
	@ApiProperty()
	@IsString()
	user_id: string;

	@ApiProperty()
	@IsString()
	feedback_id: string;
}
