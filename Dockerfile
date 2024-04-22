FROM nginx:alpine

COPY ./dist /usr/share/nginx/html
COPY /portfolio/Hendrik_Van_Beersel/CV/cert /opt/certificates
COPY /portfolio/Hendrik_Van_Beersel/CV/nginx.conf /etc/nginx/nginx.conf

EXPOSE 443