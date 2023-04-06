import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from '~prisma/prisma.service';

@Injectable()
export class InvoiceService {
	constructor(private prisma: PrismaService) {}

	create(invoice: CreateInvoiceDto) {
		return this.prisma.invoice.create({ data: invoice });
	}

	findAll() {
		return this.prisma.invoice.findMany();
	}

	async findOne(id: string) {
		const invoice = await this.prisma.invoice.findUnique({
			where: {
				id,
			},
		});
		if (!id) return null;
		if (!invoice)
			throw new NotFoundException(`Cannot find invoice with id ${id}`);
		return invoice;
	}

	update(id: string, data: UpdateInvoiceDto) {
		return this.prisma.invoice.update({
			where: { id },
			data,
		});
	}

	remove(id: string) {
		return this.prisma.invoice.delete({
			where: { id },
		});
	}
}
