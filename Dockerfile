FROM node:18.9.0
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm set-script prepare '' && npm install --omit=dev
COPY ./dist ./dist
EXPOSE 3000
CMD npm start