FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY prisma ./prisma/

COPY . .

RUN npx prisma generate

EXPOSE 8080

CMD [ "npm", "run", "start:migrate" ]
