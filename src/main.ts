import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '~swagger/swagger';
import { setupApp } from '~setup/setup-app';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	setupSwagger(app);
	setupApp(app);

	await app.listen(process.env.PORT || 8000);
}
bootstrap();
