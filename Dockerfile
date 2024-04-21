FROM node:18-alpine
WORKDIR /app
COPY ./dist .

EXPOSE 8080
CMD [ "npm", "run", "preview" ]