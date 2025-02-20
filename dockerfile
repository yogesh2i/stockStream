FROM node:latest
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 50050
CMD [ "node", "index.js" ]