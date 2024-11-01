FROM node:18 AS build

WORKDIR /app

COPY . .

RUN npm install

COPY .env .env

RUN npm run build -- --configuration=production

FROM nginx:alpine

COPY --from=build /app/dist/math-calculator-ia /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]