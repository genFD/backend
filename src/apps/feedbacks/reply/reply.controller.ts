import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Replies } from './entities/reply.entity';

@Controller('/fb/replies')
@ApiTags('Feedbacks - Replies')
export class ReplyController {
	constructor(private readonly replyService: ReplyService) {}

	@Post()
	@ApiCreatedResponse({
		description: 'A new reply has been successfully submitted.',
	})
	create(@Body() reply: CreateReplyDto) {
		return this.replyService.create(reply);
	}

	@Get()
	@ApiOkResponse({ type: [Replies] })
	findAll() {
		return this.replyService.findAll();
	}

	@Get(':id')
	@ApiOkResponse({ type: Replies })
	findOne(@Param('id') id: string) {
		return this.replyService.findOne(id);
	}

	@Patch(':id')
	@ApiOkResponse({ type: Replies })
	update(@Param('id') id: string, @Body() data: UpdateReplyDto) {
		return this.replyService.update(id, data);
	}

	@Delete(':id')
	@ApiOkResponse({ type: Replies })
	remove(@Param('id') id: string) {
		return this.replyService.remove(id);
	}
}
