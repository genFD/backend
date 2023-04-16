import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthSerializer } from './auth.serializer';
import { LocalStrategy } from './strategies/local.strategy';
import { FeedbacksUserModule } from '~apps/feedbacks/user/user.module';
import { UserModule } from '~modules/user/user.module';

@Module({
  imports: [ConfigModule, UserModule, FeedbacksUserModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, AuthSerializer, LocalStrategy],
})
export class AuthModule {}
