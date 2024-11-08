FROM node:20.17.0
RUN apt-get update && \
    apt-get install -y python3 python3-pip
RUN npm install -g --force npm
RUN npm install -g --force yarn
RUN mkdir -p /var/www/app
WORKDIR /var/www/app
ADD . /var/www/app
RUN yarn
CMD yarn build && yarn start:dev