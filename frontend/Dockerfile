# base image
FROM node:14.4.0-alpine

# set working directory
WORKDIR /frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /frontend/package.json
RUN npm install
RUN npm install @vue/cli@4.0.5 -g

# start app
CMD ["npm", "run", "serve"]