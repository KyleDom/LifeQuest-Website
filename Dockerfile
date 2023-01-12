FROM node:17

WORKDIR /Lifequest/frontend


COPY frontend/package.json ./
COPY frontend/package-lock.json ./
COPY . .

EXPOSE 5000

CMD ["npm", "start"]
