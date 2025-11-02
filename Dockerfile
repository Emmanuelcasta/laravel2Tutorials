# syntax=docker/dockerfile:1.7

# Base mínima y actual
FROM node:22-alpine AS base
WORKDIR /usr/src/app

# Instala solo lo necesario usando el lockfile
COPY package*.json ./
RUN npm ci --omit=dev

# Copia el resto del código
COPY . .

# Configuración de runtime
ENV NODE_ENV=production
ENV PORT=8080

# Usuario no root
USER node

# Expone el puerto en el contenedor
EXPOSE 8080

# Arranque de la app (tu entrypoint está en scr/app.js)
CMD ["node", "scr/app.js"]
