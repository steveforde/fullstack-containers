FROM node:24
WORKDIR /usr/src/app
COPY ./todo-app/index.js ./index.js
CMD ["node", "index.js"]