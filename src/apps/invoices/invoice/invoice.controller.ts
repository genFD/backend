import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Invoices } from './entities/invoice.entity';

@Controller('invoices')
@ApiTags('Invoices - Invoices')
export class InvoiceController {
	constructor(private readonly invoiceService: InvoiceService) {}

	@Post()
	@ApiCreatedResponse({
		description: 'A new invoice has been successfully created.',
	})
	create(@Body() invoice: CreateInvoiceDto) {
		return this.invoiceService.create(invoice);
	}

	@Get()
	@ApiOkResponse({ type: [Invoices] })
	findAll() {
		return this.invoiceService.findAll();
	}

	@Get(':id')
	@ApiOkResponse({ type: Invoices })
	findOne(@Param('id') id: string) {
		return this.invoiceService.findOne(id);
	}

	@Patch(':id')
	@ApiOkResponse({ type: Invoices })
	update(@Param('id') id: string, @Body() data: UpdateInvoiceDto) {
		return this.invoiceService.update(id, data);
	}

	@Delete(':id')
	@ApiOkResponse({ type: Invoices })
	remove(@Param('id') id: string) {
		return this.invoiceService.remove(id);
	}
}
