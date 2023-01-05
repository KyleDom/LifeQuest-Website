FROM node:17

WORKDIR /LifeQuest-Website/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]