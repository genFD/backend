import { ApiProperty } from '@nestjs/swagger';
import { User_Feedback } from '@prisma/client';

export class User implements User_Feedback {
	@ApiProperty()
	id: string;

	@ApiProperty()
	image: string;

	@ApiProperty()
	name: string;

	@ApiProperty()
	username: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	password: string;

	@ApiProperty()
	admin: boolean;

	@ApiProperty()
	createdAt: Date;

	@ApiProperty()
	updatedAt: Date;
}
