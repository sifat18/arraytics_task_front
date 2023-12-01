FROM node:16.16.0

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

RUN  ["chmod","+x","./entrypoint.sh"]
ENTRYPOINT [ "sh","./entrypoint.sh" ]





