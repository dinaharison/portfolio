# Jean Bienvenue Dinaharison — Portfolio

A responsive Angular landing page presenting research projects, experience, and education. The original French CV is available from the page.

## Run with Docker

From this directory, run `docker compose up --build` and open http://localhost:8080. Use `docker compose down` to stop it. The multi-stage Dockerfile builds the Angular app and serves the static production files with Nginx.

In the managed cloud environment, npm inside the build container needs the host’s trusted CA bundle. From the same directory, run:

```sh
docker build --secret id=npm_ca,src="$SSL_CERT_FILE" -t dinaharison-portfolio:local .
docker compose up -d --no-build
```

## Local development

With Node.js 24 and npm installed, run `npm ci` and `npm start`. Open http://localhost:4200. Run `npm run build` to generate the production site in `dist/portfolio/browser`.
