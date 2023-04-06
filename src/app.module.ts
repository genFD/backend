import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloCarUserModule } from './apps/hellocar/user/user.module';
import { InvoiceUserModule } from './apps/invoices/user/user.module';
import { FeedbacksUserModule } from './apps/feedbacks/user/user.module';
import { InvoiceModule } from './apps/invoices/invoice/invoice.module';
import { FeedbackModule } from './apps/feedbacks/feedback/feedback.module';
import { CommentModule } from './apps/feedbacks/comment/comment.module';
import { ReplyModule } from './apps/feedbacks/reply/reply.module';
import { UpvoteModule } from './apps/feedbacks/upvote/upvote.module';

@Module({
	imports: [
		HelloCarUserModule,
		InvoiceUserModule,
		FeedbacksUserModule,
		InvoiceModule,
		FeedbackModule,
		CommentModule,
		ReplyModule,
		UpvoteModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
