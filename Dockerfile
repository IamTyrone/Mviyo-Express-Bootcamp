FROM node:18-slim

WORKDIR /code

COPY package.json package-lock.json /code/

RUN npm install && \
    npm install -g nodemon && \
    apt-get update && apt-get upgrade -y && \
    apt-get install -y curl && \
    npm install prisma --save-dev && \
    npx prisma && \
    npm install @prisma/client && \
    apt-get update -y && apt-get install -y openssl

COPY . /code/

EXPOSE 9000
