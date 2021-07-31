FROM node:latest

#Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install -g npm@latest

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm build


# To Expose specific port of Docker container to Docker hub


EXPOSE 3000

CMD [ "npm", "start" ]
