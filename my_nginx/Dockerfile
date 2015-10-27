# set nginx base imge
FROM nginx

# author
MAINTAINER Alan Tai <gogistics@gogistics-tw.com>

# commands
RUN apt-get update && apt-get install -y git

# copy config into container
COPY nginx.conf /etc/nginx/nginx.conf
