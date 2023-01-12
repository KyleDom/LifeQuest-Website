FROM node:17

WORKDIR /Lifequest/frontend

RUN npm i -g

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
