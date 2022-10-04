# build stage
FROM node:alpine AS build

WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .

# runtime stage
FROM alpine:3.10 AS runtime

RUN apk add --update nodejs
RUN addgroup -S node && adduser -S node -G node

USER node
RUN mkdir /home/node/src
WORKDIR /home/node/src
COPY --from=0 --chown=node:node /build .

EXPOSE 3000

CMD [ "node", "index.js" ]
