import type { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { documentBuilder } from './swagger/swagger.config';
import { PinoLoggerService } from '~logger/pinoLogger.service';
import { LoggerErrorInterceptor } from 'nestjs-pino';
import * as passport from 'passport';
import * as session from 'express-session';
import * as createPgStore from 'connect-pg-simple';

export const setupApp = (app: INestApplication) => {
  //Logger
  const logger = app.get(PinoLoggerService);
  app.useLogger(logger);
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  logger.log(`Application listening at: http://localhost:${process.env.PORT} `);

  //Global validation
  // app.useGlobalPipes(validationPipe);
  app.useGlobalPipes();
  const document = SwaggerModule.createDocument(app, documentBuilder.build());

  //Swagger
  SwaggerModule.setup('apidoc', app, document, { swaggerOptions: { persistAuthorization: true } });
  logger.log(`Documentation available at: http://localhost:${process.env.PORT}/apidoc`);

  // Cors
  app.enableCors();

  // Global prefix
  app.setGlobalPrefix('api/v1');

  // CONFIG SERVICE
  const configService = app.get(ConfigService);

  // Session
  const pgStore = createPgStore(session);

  app.use(
    session({
      store: new pgStore({
        conString: configService.get('DB_URL_DEV'),
        tableName: 'Session',
      }),
      name: 'NESTJS_SESSION_ID',
      secret: configService.get('SESSION_SECRET_KEY'),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60000,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
