import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { UpvoteService } from './upvote.service';
import { CreateUpvoteDto } from './dto/create-upvote.dto';
import { UpdateUpvoteDto } from './dto/update-upvote.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Upvotes } from './entities/upvote.entity';

@Controller('fb/upvotes')
@ApiTags('Feedbacks - Upvotes')
export class UpvoteController {
	constructor(private readonly upvoteService: UpvoteService) {}

	@Post()
	@ApiCreatedResponse({
		description: 'A new upvote has been successfully submitted.',
	})
	create(@Body() upvote: CreateUpvoteDto) {
		return this.upvoteService.create(upvote);
	}

	@Get()
	@ApiOkResponse({ type: [Upvotes] })
	findAll() {
		return this.upvoteService.findAll();
	}

	@Get(':id')
	@ApiOkResponse({ type: Upvotes })
	findOne(@Param('id') id: string) {
		return this.upvoteService.findOne(id);
	}

	@Patch(':id')
	@ApiOkResponse({ type: Upvotes })
	update(@Param('id') id: string, @Body() data: UpdateUpvoteDto) {
		return this.upvoteService.update(id, data);
	}

	@Delete(':id')
	@ApiOkResponse({ type: Upvotes })
	remove(@Param('id') id: string) {
		return this.upvoteService.remove(id);
	}
}
