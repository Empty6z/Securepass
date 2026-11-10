# ---- Fase 1: Build de la aplicación ----
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --production=false

COPY . .
RUN npm run build

# ---- Fase 2: Servir la aplicación compilada ----
FROM nginx:alpine

# Copiar los archivos compilados desde la fase builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto del servidor web (nginx aloja en 80 por defecto)
EXPOSE 80

# El comando por defecto de nginx:alpine ya sirve los archivos
CMD ["nginx", "-g", "daemon off;"]