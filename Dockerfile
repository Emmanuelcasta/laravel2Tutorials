# Usar la imagen oficial de Node.js como base;
FROM node:22 
# Crear directorio de la app
WORKDIR /usr/src/app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 8080

CMD [ "node", "src/app.js" ]
