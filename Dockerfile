FROM node:15 AS builder


WORKDIR /atlas

COPY package.json .
COPY package-lock.json .
RUN npm install

ARG CHARON_URL
ARG TEST_DISPLAY_ALWAYS

COPY . .
RUN npm run build

FROM nginx:1.19.2-alpine
COPY --from=builder /atlas/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
