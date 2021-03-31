FROM node:lts-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# RUN apk update && apk upgrade
# RUN apk add git

COPY package*.json .

RUN npm install --only-prod --silent

COPY . .

RUN npm run generate

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# start the app
CMD [ "npm", "start" ]
