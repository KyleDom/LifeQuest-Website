FROM node:17

WORKDIR Lifequest/frontend

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
