FROM  nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
RUN  rm -f /etc/nginx/conf.d/default.conf
COPY ./public /usr/share/nginx/html/