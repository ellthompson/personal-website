FROM debian:jessie
MAINTAINER Elliott Thompson

RUN apt-get -y update
RUN apt-get -y install curl
RUN apt-get -y install sudo
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get -y install nodejs
RUN mkdir personal-website
ADD . personal-website
WORKDIR personal-website
RUN npm install
RUN node_modules/.bin/webpack
EXPOSE 3000
CMD npm start
