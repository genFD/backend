import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloCarUserModule } from './apps/hellocar/user/user.module';
import { InvoiceUserModule } from './apps/invoices/user/user.module';
import { FeedbacksUserModule } from './apps/feedbacks/user/user.module';

@Module({
	imports: [HelloCarUserModule, InvoiceUserModule, FeedbacksUserModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
