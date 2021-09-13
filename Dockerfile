FROM node:16-alpine
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . . 
RUN npm update
RUN npm i -g @angular/cli
RUN npm i
# todo: build for prod
EXPOSE 4200
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
