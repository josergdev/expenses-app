
FROM node:lts-slim as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build --prod

FROM nginx:alpine
COPY docker/nginx/default.conf /etc/nginx/conf.d
COPY --from=build /app/dist/expenses-app /usr/share/nginx/html