FROM nginx:stable-alpine

COPY ./dist/Cocktails/ /usr/share/nginx/html

EXPOSE 80
