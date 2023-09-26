# Use una imagen base de Node.js
FROM node:18.17-alpine

# Establece el directorio de trabajo en la carpeta de la aplicación
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Exponer el puerto en el que la aplicación se ejecutará (por ejemplo, el puerto 3000)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "./build/index.js"]
