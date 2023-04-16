// nest
import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';

//nest module
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
// apps module
import { UserModule } from './common/modules/user/user.module';

// import { InvoiceUserModule } from './apps/invoices/user/user.module';
// import { FeedbacksUserModule } from './apps/feedbacks/user/user.module';
// import { HelloCarUserModule } from './apps/hellocar/user/user.module';
import { InvoiceModule } from './apps/invoices/invoice/invoice.module';
import { FeedbackModule } from './apps/feedbacks/feedback/feedback.module';
import { CommentModule } from './apps/feedbacks/comment/comment.module';
import { ReplyModule } from './apps/feedbacks/reply/reply.module';
import { UpvoteModule } from './apps/feedbacks/upvote/upvote.module';
import { AuthModule } from './common/modules/auth/auth.module';
import { LoggerModule } from './common/logger/logger.module';

// app controller
import { AppController } from './app.controller';

// app service
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';

type NestModuleImport = Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference<any>;

const appModules: NestModuleImport[] = [
  UserModule,
  InvoiceModule,
  FeedbackModule,
  CommentModule,
  ReplyModule,
  UpvoteModule,
  AuthModule,
  LoggerModule,
];

@Module({
  imports: [...appModules, ConfigModule.forRoot({ isGlobal: true }), ThrottlerModule.forRoot({ ttl: 60, limit: 10 })],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
