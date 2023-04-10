import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
	@ApiProperty()
	@IsString()
	name: string;

	@ApiProperty()
	@IsString()
	username: string;

	@ApiProperty()
	@IsEmail()
	email: string;

	@ApiPropertyOptional()
	image?: string;

	@ApiProperty()
	@IsString()
	password: string;
}
