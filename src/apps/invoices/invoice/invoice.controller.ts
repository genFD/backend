import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
	HttpCode,
	HttpStatus,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import {
	ApiAcceptedResponse,
	ApiCreatedResponse,
	ApiOkResponse,
	ApiTags,
} from '@nestjs/swagger';
import { Invoices } from './entities/invoice.entity';

@Controller('invoices')
@ApiTags('Invoices - Invoices')
export class InvoiceController {
	constructor(private readonly invoiceService: InvoiceService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@ApiCreatedResponse({
		type: Invoices,
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
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({ type: Invoices })
	findOne(@Param('id') id: string) {
		return this.invoiceService.findOne(id);
	}

	@Get('/search/status')
	@ApiOkResponse({ type: Invoices })
	findByStatus(@Query('status') status: string) {
		return this.invoiceService.findAllByStatus(status);
	}

	@Patch(':id')
	@HttpCode(HttpStatus.ACCEPTED)
	@ApiAcceptedResponse()
	update(@Param('id') id: string, @Body() data: UpdateInvoiceDto) {
		return this.invoiceService.update(id, data);
	}

	@Delete(':id')
	@HttpCode(HttpStatus.ACCEPTED)
	@ApiAcceptedResponse()
	remove(@Param('id') id: string) {
		return this.invoiceService.remove(id);
	}
}
