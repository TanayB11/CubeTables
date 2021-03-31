FROM node:lts-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN npm install --only-prod --silent

COPY . .

ENV PORT="3000"

EXPOSE 3000

CMD npm run start

