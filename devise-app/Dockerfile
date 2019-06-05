FROM nginx:1.16
# this new image will be create from parent image = nginx:1.16(stable)

#copy angular app :
COPY /dist/devise-app /usr/share/nginx/html/devise-app

#copy docker-nginx.conf for reverse-proxy devise-api (node/express or springBoot)
COPY docker-nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]