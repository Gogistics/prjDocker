# set base image
FROM debian:latest

# set author
MAINTAINER ALAN TAI <gogistics@gogistics-tw.com>

# command
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -yq curl
RUN DEBIAN_FRONTEND=noninteractive apt-get install -yq apt-utils
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN DEBIAN_FRONTEND=noninteractive apt-get install -yq nodejs
RUN apt-get update
RUN apt-get clean
RUN npm install forever -g

# add files in current directory
ADD . /web

# install
RUN cd /web && npm install

EXPOSE 8080
CMD ["node", "/web/server.js"]