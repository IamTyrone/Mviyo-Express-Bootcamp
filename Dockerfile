FROM node:18.19-slim

WORKDIR /code

COPY package.json package-lock.json /code/

RUN npm install && \
    npm install -g nodemon && \
    apt-get update && apt-get upgrade -y && \
    apt-get install -y curl && \
    npm install prisma --save-dev && \
    npm install prisma -g && \
    npx prisma && \
    npm install @prisma/client && \
    apt-get update -y && apt-get install -y openssl && \
    npm install ts-node --save-dev && \
    npm install typescript -g && \
    npm install typescript --save-dev

RUN npx tsc --init

RUN npm install bcrypt && \
    npm i --save @types/bcrypt


COPY . /code/

RUN npx prisma migrate dev --name init
# ! This command should ideally be run once.

EXPOSE 9000
