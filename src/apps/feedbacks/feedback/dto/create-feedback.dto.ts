import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFeedbackDto {
	@ApiProperty()
	@IsString()
	title: string;

	@ApiProperty()
	@IsString()
	description: string;

	@ApiProperty({ required: false, default: 'feature' })
	@IsString()
	category: string;

	@ApiProperty({ required: false, default: 'suggestion' })
	@IsString()
	status: string;

	@ApiProperty()
	@IsString()
	user_id: string;
}
