FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY server.js manifest.json ./
COPY routes/ ./routes/
COPY lib/ ./lib/
COPY public/ ./public/
COPY docs/ ./docs/

ENV PORT=3100
ENV PROJECTS_DIR=/data/projects
VOLUME /data/projects

EXPOSE 3100

CMD ["node", "server.js"]
