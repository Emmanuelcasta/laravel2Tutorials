FROM node:22-alpine

WORKDIR /usr/src/app

# deps
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# código
COPY src ./src

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["node","src/app.js"]
