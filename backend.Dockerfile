FROM node:lts-alpine3.14
WORKDIR /app
RUN npm install pm2 -g
COPY package* ./
RUN npm install
COPY . .
CMD ["pm2-runtime", "app.js"]