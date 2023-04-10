import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDto {
	// @ApiProperty({ required: false, default: new Date() })
	// @IsDate()
	// createdAt: Date;
	// @ApiPropertyOptional()
	// title?: string;
	// @ApiProperty({ required: false })
	// @IsDate()
	// paymentDue: Date;
	@ApiProperty()
	@IsString()
	description: string;

	@ApiProperty()
	@IsNumber()
	paymentTerms: number;

	@ApiProperty()
	@IsString()
	status: string;

	@ApiProperty()
	@IsString()
	client_id: string;

	@ApiProperty()
	@IsString()
	user_id: string;
}
