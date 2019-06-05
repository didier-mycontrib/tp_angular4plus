FROM nginx:1.16
# this new image will be create from parent image = nginx:1.16(stable)

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder

COPY /dist/devise-app /usr/share/nginx/html/devise-app

CMD ["nginx", "-g", "daemon off;"]