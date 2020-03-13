# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# TODO: tweak this for production deployments
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

# Forward traffic
EXPOSE 8080

# Start
CMD ["yarn", "start"]