FROM node:alpine

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "index.js" ]
