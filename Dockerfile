FROM nginx:alpine

COPY ./dist /usr/share/nginx/html

EXPOSE 443 
EXPOSE 80