FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

RUN  ["chmod","+x","./entrypoint.sh"]
ENTRYPOINT [ "sh","./entrypoint.sh" ]





