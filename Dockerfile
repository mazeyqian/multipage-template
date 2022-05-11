FROM nginx:1.21.6-alpine-perl

COPY ./dist /usr/share/nginx/html/

# Nginx Content: include /etc/nginx/conf.d/*.conf;
# COPY ./build/nginx/example.conf /etc/nginx/conf.d/

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
