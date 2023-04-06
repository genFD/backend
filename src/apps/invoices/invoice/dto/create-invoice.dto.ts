import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDto {
	@ApiProperty()
	@IsDate()
	createdAt: Date;

	@ApiProperty()
	@IsDate()
	paymentDue: Date;

	@ApiProperty()
	@IsString()
	description: string;

	@ApiProperty()
	@IsNumber()
	paymentTerms: number;

	@ApiProperty({ required: false, default: 'pending' })
	@IsString()
	status?: string;

	@ApiProperty()
	@IsString()
	client_id: string;

	@ApiProperty()
	@IsString()
	user_id: string;
}
