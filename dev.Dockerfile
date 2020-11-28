FROM node:10.19.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm set strict-ssl false
RUN npm install
RUN npm audit fix
COPY . /usr/src/app
CMD [ "npm", "run", "dev" ]