# nginx sample 3
FROM nginx

# author
MAINTAINER Alan Tai <gogistics@gogistics-tw.com>

# install nginx
RUN apt-get update && apt-get install -y nginx git
RUN rm -rf /etc/nginx/sites-enabled/default

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]