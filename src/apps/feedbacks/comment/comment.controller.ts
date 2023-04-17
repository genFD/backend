import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Comments } from './entities/comment.entity';
import { LoggedInGuard } from '~guards/logged-in.guard';

@Controller('feedbacks/comments')
@ApiTags('Feedbacks - Comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @UseGuards(LoggedInGuard)
  @ApiCreatedResponse({ description: 'A new comment has been successfully submitted.' })
  @ApiCreatedResponse({
    description: 'A new comment has been successfully submitted.',
  })
  create(@Body() comment: CreateCommentDto, @Param('id') feedback_id: string, @Req() req: any) {
    const { id } = req.user;
    return this.commentService.create(comment, id, feedback_id);
  }

  @Get('/list')
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
