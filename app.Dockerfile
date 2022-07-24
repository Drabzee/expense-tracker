FROM node:lts-alpine3.14 as frontend
WORKDIR /app
COPY ./src/frontend/package* ./
RUN npm install
COPY ./src/frontend ./
RUN mkdir -p /app/node_modules/.cache \
        && chown -R node:node /app/node_modules/.cache \
        && chmod -R 777 /app/node_modules/.cache
RUN npm run build

FROM node:lts-alpine3.14
WORKDIR /app
RUN npm install pm2 -g
COPY ./src/package* ./
RUN npm install
COPY --from=frontend /app/build /app/public
COPY ./src ./
RUN rm -rf frontend
CMD ["pm2-runtime", "app.js"]