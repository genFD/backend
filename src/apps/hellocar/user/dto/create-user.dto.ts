import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
	@ApiProperty()
	@IsEmail()
	email: string;

	@ApiProperty()
	@IsString()
	password: string;

	@ApiPropertyOptional({ required: false })
	@IsString()
	image?: string;
}
