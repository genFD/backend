#############################################
# VARIABLES
ARG NODE_VERSION=18
ARG ALPINE_VERSION=3.17
ARG NODE_ENV_PROD=production
ARG NODE_ENV_DEV=development
ARG SHA=sha256:19eaf41f3b8c2ac2f609ac8103f9246a6a6d46716cdbe49103fdb116e55ff0cc

#############################################
# BASE IMAGE
# Machine compatible
FROM node:18-alpine@${SHA} AS base
# FROM node:18-alpine AS base
RUN apk update \
  && apk add openssl1.1-compat \ 
  && apk add dumb-init 
WORKDIR /usr/src/app

#############################################
# DEV IMAGE
FROM base AS development
COPY  package*.json ./
COPY prisma ./prisma/
RUN npm ci
COPY  . .
RUN npm run prisma:generate
USER node


#############################################
# BUILD FOR PRODUCTION
FROM base As build
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules 
COPY --chown=node:node . .
RUN npm run build




#############################################
# Prod image

FROM base As production
ENV NODE_ENV=${NODE_ENV_PROD}
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma
COPY --chown=node:node --from=build /usr/src/app/.env .env
COPY --chown=node:node --from=build /usr/src/app/package.json .
COPY --chown=node:node --from=build /usr/src/app/package-lock.json .
RUN npm ci --omit=dev
COPY --chown=node:node --from=build /usr/src/app/node_modules/.prisma/client  ./node_modules/.prisma/client
EXPOSE 8000
CMD [  "npm", "run", "start:migrate:prod" ]
