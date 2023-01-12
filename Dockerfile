FROM node:17

WORKDIR /var/jenkins_home/workspace/Lifequest/backend

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
