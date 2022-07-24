FROM node:lts-alpine3.14
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
RUN mkdir -p /app/node_modules/.cache \
        && chown -R node:node /app/node_modules/.cache \
        && chmod -R 777 /app/node_modules/.cache
CMD ["npm", "start"]