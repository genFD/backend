import { ApiProperty } from '@nestjs/swagger';
import { User_Invoice } from '@prisma/client';

export class Users implements User_Invoice {
	@ApiProperty()
	admin: boolean;
	@ApiProperty()
	id: string;
	@ApiProperty()
	email: string;
	@ApiProperty()
	password: string;
}
