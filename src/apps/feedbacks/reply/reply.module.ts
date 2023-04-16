import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { PrismaModule } from '~modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReplyController],
  providers: [ReplyService],
})
export class ReplyModule {}
