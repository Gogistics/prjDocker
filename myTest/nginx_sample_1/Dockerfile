# tutorial Dockerfile
FROM ubuntu:latest

# author
MAINTAINER Alan Tai <gogistics@gogistics-tw.com>

# Install necessary tools
RUN apt-get update && apt-get install -y nano wget dialog net-tools git

# Download and Install Nginx
RUN apt-get install -y nginx  

# Append "daemon off;" to the configuration file
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# add 
ADD ./html5-boilerplate/dist/ /usr/share/nginx/html/

# Expose ports
EXPOSE 80

# Set the default command to execute when creating a new container
CMD service nginx start