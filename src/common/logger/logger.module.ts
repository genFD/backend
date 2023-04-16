import { Global, Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { loggerOptions } from '~loggerConfig/logger.config';
import { PinoLoggerService } from './pinoLogger.service';

@Global()
@Module({
	imports: [PinoLoggerModule.forRoot(loggerOptions)],
	providers: [PinoLoggerService],
	exports: [PinoLoggerService],
})
export class LoggerModule {}
