FROM node:13 AS builder


WORKDIR /atlas

COPY package.json package-lock.json.
RUN npm install

ARG CHARON_URL

COPY . .
COPY src .
COPY babel.config.js .
COPY tsconfig.json .
COPY webpack.config.js .
RUN npm run build

FROM nginx:1.18-alpine
COPY --from=builder /atlas/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
