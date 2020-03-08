# Version: 0.0.1
FROM mhart/alpine-node:12
LABEL maintainer="devopsabi@gmail.com"
ENV REFRESHED_AT 2020-03-08
RUN apk add curl
COPY nodejs /app
WORKDIR "/app"
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]
