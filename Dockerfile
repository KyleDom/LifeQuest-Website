FROM node:17

WORKDIR /Lifequest/backend

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
