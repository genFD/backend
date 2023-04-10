import { ApiProperty } from '@nestjs/swagger';
import { User_Cardeal } from '@prisma/client';

export class User implements User_Cardeal {
	@ApiProperty()
	id: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	password: string;

	@ApiProperty()
	image: string;

	@ApiProperty()
	admin: boolean;

	@ApiProperty()
	createdAt: Date;

	@ApiProperty()
	updatedAt: Date;
}
