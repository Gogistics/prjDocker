# nginx example 2
FROM ubuntu:stable

# author
MAINTAINER Alan Tai <gogistics@gogistics-tw.com>

# commands
RUN apt-get update && apt-get install -y software-properties-common python-software-properties && \
	add-apt-repository -y ppa:nginx/stable && \
	apt-get update && \
	apt-get install -y nginx && \
	rm -rf /var/lib/apt/lists/* && \
	echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
	chown -R www-data:www-data /var/lib/nginx

VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

WORKDIR /etc/nginx

EXPOSE 80
EXPOSE 443

CMD ["nginx"]