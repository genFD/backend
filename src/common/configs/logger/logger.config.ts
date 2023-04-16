import type { Request } from 'express';
import type { IncomingMessage } from 'http';
import * as nanoid from 'nanoid';
import type { Params } from 'nestjs-pino';
import type { ReqId } from 'pino-http';
import { stdTimeFunctions } from 'pino';

export const loggerOptions: Params = {
  pinoHttp: {
    timestamp: stdTimeFunctions.isoTime,
    formatters: {
      bindings: () => ({}),
    },
    transport: {
      target: 'pino-pretty',
      options: {
        sync: true,
        singleLine: true,
      },
    },
    level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
    quietReqLogger: true,

    genReqId: (req: IncomingMessage): ReqId => (<Request>req).header('X-Request-Id') || nanoid.nanoid(),
  },
};
