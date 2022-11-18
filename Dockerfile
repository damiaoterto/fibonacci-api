FROM node:18.12-alpine

WORKDIR /usr/share/app

COPY package*.json ./

COPY ./ ./

RUN npm install --omit=dev

CMD ["node", "src/main"]
