FROM node:17

WORKDIR /Lifequest/frontend

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
