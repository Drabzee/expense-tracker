FROM node:lts-alpine3.14
WORKDIR /app
RUN npm install pm2 -g
COPY ./src/package* ./
COPY ./.env ./
RUN npm install
COPY ./src ./
CMD ["pm2-dev", "app.js"]