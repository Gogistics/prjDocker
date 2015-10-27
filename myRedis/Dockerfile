# Redis Image

# Set the base image
FROM ubuntu

# maintainer
MAINTAINER ALAN TAI

# update repository
RUN apt-get update && apt-get install -y redis-server

# expose Redis port 6379
EXPOSE 6379

# run Redis Server
ENTRYPOINT ["/usr/bin/redis-server"]