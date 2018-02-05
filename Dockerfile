# select node version and os
FROM node:8-stretch

# define environment variables
ENV NODE_ENV production
ENV SERVER_HOST localhost
ENV SERVER_PORT 8080
ENV MONGODB_URL mongodb://localhost/test
ENV JWT_SECRET test

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy dependency lists
COPY package*.json ./

# install dependencies
RUN npm install --production --silent

# copy source code
COPY . .

# expose port
EXPOSE 8080

# start production server
CMD npm run prod