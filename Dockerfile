FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=secret,id=npm_ca \
    if [ -f /run/secrets/npm_ca ]; then export NODE_EXTRA_CA_CERTS=/run/secrets/npm_ca; fi && \
    npm ci --no-audit --no-fund
COPY angular.json tsconfig.json ./
COPY src ./src
COPY public ./public
RUN npm run build && chmod -R a+rX dist/portfolio/browser

FROM nginx:stable-alpine
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html
EXPOSE 80
