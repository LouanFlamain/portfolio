# Utiliser l'image officielle Node.js comme image de base
FROM node:18-alpine

# Installer pnpm globalement
RUN npm install -g pnpm

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier pnpm-lock.yaml et package.json dans le répertoire de travail
COPY pnpm-lock.yaml package.json ./

# Installer les dépendances de l'application
RUN pnpm install

# Copier le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Construire l'application Next.js
RUN pnpm run build

# Exposer le port sur lequel l'application Next.js va tourner
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["pnpm", "start"]

