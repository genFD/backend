import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Comments } from './entities/comment.entity';

@Controller('/fb/comments')
@ApiTags('Feedbacks - Comments')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@Post()
	@ApiCreatedResponse({
		description: 'A new comment has been successfully submitted.',
	})
	create(@Body() comment: CreateCommentDto) {
		return this.commentService.create(comment);
	}

	@Get()
	@ApiOkResponse({ type: [Comments] })
	findAll() {
		return this.commentService.findAll();
	}

	@Get(':id')
	@ApiOkResponse({ type: Comments })
	findOne(@Param('id') id: string) {
		return this.commentService.findOne(id);
	}

	@Patch(':id')
	@ApiOkResponse({ type: Comments })
	update(@Param('id') id: string, @Body() data: UpdateCommentDto) {
		return this.commentService.update(id, data);
	}

	@Delete(':id')
	@ApiOkResponse({ type: Comments })
	remove(@Param('id') id: string) {
		return this.commentService.remove(id);
	}
}
