FROM node:12.18.2-stretch-slim
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production

# Bundle app source
COPY ./dist .

EXPOSE 5000
CMD npm run prod