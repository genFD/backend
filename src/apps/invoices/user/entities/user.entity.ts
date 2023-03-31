import { ApiProperty } from '@nestjs/swagger';
import { User_Invoice } from '@prisma/client';

export class User implements User_Invoice {
	@ApiProperty()
	admin: boolean;
	@ApiProperty()
	id: string;
	@ApiProperty()
	email: string;
	@ApiProperty()
	password: string;
}
