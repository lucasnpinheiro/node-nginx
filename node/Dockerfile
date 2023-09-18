FROM node:lts-hydrogen

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-linux-amd64-v0.6.1.tar.gz

COPY package.json package-lock.json /usr/src/app/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]