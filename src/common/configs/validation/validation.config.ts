import { ValidationPipe } from '@nestjs/common';

// FIXME: when passed to globalPipe middleware, prevents user creation w/o image
export const validationPipe = new ValidationPipe({
  whitelist: true,
});
