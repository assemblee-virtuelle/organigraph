FROM node:16-alpine

# Build tools for the native dependencies, ssh-keygen for the actors' key pairs
RUN apk add --update --no-cache autoconf bash libtool automake python3 alpine-sdk openssh-keygen cmake

WORKDIR /app/backend

COPY backend/package.json backend/yarn.lock ./
RUN yarn install --frozen-lockfile

COPY backend/ ./

EXPOSE 3000

CMD [ "./node_modules/.bin/moleculer-runner", "services/*.service.js" ]
