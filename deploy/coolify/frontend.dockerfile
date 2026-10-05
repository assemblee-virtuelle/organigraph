FROM node:16-alpine AS build

RUN apk add --update --no-cache autoconf bash libtool automake python3 alpine-sdk

WORKDIR /app/frontend

COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install --frozen-lockfile

COPY frontend/ ./

# Inlined by react-scripts at build time
ARG REACT_APP_MIDDLEWARE_URL
ARG REACT_APP_INSTANCE_NAME
ENV REACT_APP_MIDDLEWARE_URL=$REACT_APP_MIDDLEWARE_URL
ENV REACT_APP_INSTANCE_NAME=$REACT_APP_INSTANCE_NAME

RUN yarn run build

FROM node:16-alpine

RUN yarn global add serve

WORKDIR /app
COPY --from=build /app/frontend/build ./build

EXPOSE 4000

CMD [ "serve", "-s", "build", "-l", "4000" ]
