FROM node:20-alpine

RUN addgroup hackathon && adduser -S -G hackathon hackathon

WORKDIR /app

COPY --chown=hackathon package*.json .

RUN npm i

COPY --chown=hackathon . .

RUN npm run build

RUN npm prune --production

EXPOSE 3000

CMD ["npm", "start"]