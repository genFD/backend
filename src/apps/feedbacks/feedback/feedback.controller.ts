import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedbacks } from './entities/feedback.entity';

@Controller('feedbacks')
@ApiTags('Feedbacks - Feedbacks')
export class FeedbackController {
	constructor(private readonly feedbackService: FeedbackService) {}

	@Post()
	@ApiCreatedResponse({
		description: 'A new feedback has been successfully submitted.',
	})
	create(@Body() feedback: CreateFeedbackDto) {
		return this.feedbackService.create(feedback);
	}

	@Get()
	@ApiOkResponse({ type: [Feedbacks] })
	findAll() {
		return this.feedbackService.findAll();
	}

	@Get(':id')
	@ApiOkResponse({ type: Feedbacks })
	findOne(@Param('id') id: string) {
		return this.feedbackService.findOne(id);
	}

	@Patch(':id')
	@ApiOkResponse({ type: Feedbacks })
	update(@Param('id') id: string, @Body() data: UpdateFeedbackDto) {
		return this.feedbackService.update(id, data);
	}

	@Delete(':id')
	@ApiOkResponse({ type: Feedbacks })
	remove(@Param('id') id: string) {
		return this.feedbackService.remove(id);
	}
}
