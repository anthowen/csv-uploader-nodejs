FROM node:6.11

RUN apt-get update && \
    mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app
    
CMD npm install && \
    npm test && \
    npm run start:dev