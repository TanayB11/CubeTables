FROM node:lts-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN npm install --only-prod --silent

COPY . .

ENV PORT="5000"

EXPOSE 5000

CMD npm run start

