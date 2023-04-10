import { Module } from '@nestjs/common';
import { UpvoteService } from './upvote.service';
import { UpvoteController } from './upvote.controller';
import { PrismaModule } from '~prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [UpvoteController],
	providers: [UpvoteService],
})
export class UpvoteModule {}
