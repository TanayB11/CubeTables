# build stage
FROM node:lts-alpine as build-stage

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV="production"
ENV API_BASEURL="https://cubetables.tanaybiradar.com/api"

RUN npm run build

CMD ["nuxt", "start"]
