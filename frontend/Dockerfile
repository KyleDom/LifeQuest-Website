FROM node:17

WORKDIR /Lifequest/frontend

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
EXPOSE 5000
CMD ["npm", "start"]
