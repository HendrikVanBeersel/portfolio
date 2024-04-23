FROM nginx:alpine

COPY ./dist /usr/share/nginx/html
COPY /portfolio/Hendrik_Van_Beersel/CV/cert /opt/certificates

EXPOSE 443