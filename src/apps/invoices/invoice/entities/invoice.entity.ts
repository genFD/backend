import { ApiProperty } from '@nestjs/swagger';
import { Invoice } from '@prisma/client';

export class Invoices implements Invoice {
	@ApiProperty()
	id: string;

	@ApiProperty()
	createdAt: Date;

	@ApiProperty()
	paymentDue: Date;

	@ApiProperty()
	description: string;

	@ApiProperty()
	paymentTerms: number;

	@ApiProperty()
	user_id: string;

	@ApiProperty()
	client_id: string;

	@ApiProperty()
	status: string;
}
