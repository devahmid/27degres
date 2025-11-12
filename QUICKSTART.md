# 🚀 Guide de démarrage rapide

## Prérequis

- Docker et Docker Compose installés
- Git (optionnel)

## ⚠️ Note importante sur Node.js

Si vous avez Node.js v21 ou une version non LTS, **utilisez Docker** pour éviter les problèmes de compatibilité avec Angular CLI.

## Démarrage en 3 étapes

### 1. Cloner le projet (si nécessaire)
```bash
git clone <repository-url>
cd 27degres
```

### 2. Lancer l'application

#### Option A: Avec Docker (recommandé - évite les problèmes de version Node.js)
```bash
# Script automatique
./start.sh

# Ou Docker Compose directement
docker-compose up -d
```

#### Option B: Développement local
```bash
# Installer les dépendances
make install

# Lancer le frontend (utilise Docker automatiquement si Node.js incompatible)
make dev-frontend

# Lancer le backend
make dev-backend
```

### 3. Accéder à l'application
- **Frontend**: http://localhost (production) ou http://localhost:4200 (dev)
- **Backend API**: http://localhost:3000
- **Health Check**: http://localhost:3000/health

## 🌱 Initialiser la base de données (optionnel)

Pour ajouter des données de test :

```bash
# Entrer dans le conteneur backend
docker-compose exec backend sh

# Lancer le script de seed
npm run seed

# Sortir du conteneur
exit
```

## 📋 Commandes utiles

```bash
# Voir les logs
docker-compose logs -f

# Voir les logs d'un service spécifique
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongo

# Arrêter les services
docker-compose down

# Redémarrer un service
docker-compose restart backend

# Reconstruire les images
docker-compose build

# Nettoyer tout (⚠️ supprime les données)
docker-compose down -v
```

## 🐛 Dépannage

### Problème avec Node.js v21
Si vous avez Node.js v21, utilisez Docker :
```bash
make dev-frontend-docker
```

### Port déjà utilisé
Modifiez les ports dans `docker-compose.yml` si nécessaire.

### Les conteneurs ne démarrent pas
```bash
docker-compose down
docker-compose up --build
```

### MongoDB ne se connecte pas
Vérifiez que MongoDB est bien démarré :
```bash
docker-compose ps
```

### Voir les logs d'erreur
```bash
docker-compose logs backend
docker-compose logs frontend
```

## 📡 Tester l'API

```bash
# Health check
curl http://localhost:3000/health

# Liste des membres
curl http://localhost:3000/members

# Liste des événements
curl http://localhost:3000/events
```

## 🔧 Développement local (avec Node.js v18-20)

Si vous avez Node.js v18 ou v20 LTS :

### Backend
```bash
cd backend
npm install
npm run start:dev
```

### Frontend
```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

### MongoDB
```bash
docker run -d -p 27017:27017 --name mongo mongo:7
```

Puis configurez `MONGODB_URI=mongodb://localhost:27017/27degres` dans le backend.

## 🐳 Utiliser Docker pour le développement

Pour éviter tous les problèmes de version Node.js :

```bash
# Lancer tous les services en mode développement
docker-compose -f docker-compose.dev.yml up

# Ou seulement le frontend
docker-compose -f docker-compose.dev.yml up frontend
```

Les fichiers sont montés en volume, donc les modifications sont prises en compte en temps réel.
