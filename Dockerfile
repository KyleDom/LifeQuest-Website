FROM node:17

WORKDIR /Lifequest/backend

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
