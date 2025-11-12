# 27 degrés - Application Full Stack

Application complète pour l'association "27 degrés" - Basse-Ville Génération.

## 🏗️ Architecture

- **Frontend**: Angular 20 avec Tailwind CSS
- **Backend**: NestJS avec MongoDB
- **Database**: MongoDB
- **Containerisation**: Docker & Docker Compose

## 📁 Structure du projet

```
27degres/
├── frontend/              # Application Angular
│   ├── src/
│   ├── Dockerfile
│   └── nginx.conf
├── backend/               # API NestJS
│   ├── src/
│   │   ├── members/      # Module membres
│   │   ├── events/       # Module événements
│   │   └── auth/        # Module authentification
│   └── Dockerfile
├── docker-compose.yml    # Configuration Docker
└── README.md
```

## 🚀 Démarrage rapide avec Docker

### Prérequis
- Docker
- Docker Compose

### Installation et lancement

1. **Cloner le projet** (si nécessaire)

2. **Lancer tous les services** :
```bash
docker-compose up -d
```

3. **Accéder à l'application** :
   - Frontend: http://localhost
   - Backend API: http://localhost:3000
   - MongoDB: localhost:27017

### Commandes Docker utiles

```bash
# Voir les logs
docker-compose logs -f

# Arrêter les services
docker-compose down

# Reconstruire les images
docker-compose build

# Redémarrer un service spécifique
docker-compose restart backend
```

## 🛠️ Développement local

### Frontend (Angular)

```bash
cd frontend
npm install
npm start
```

L'application sera accessible sur `http://localhost:4200`

### Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

L'API sera accessible sur `http://localhost:3000`

### MongoDB

Assurez-vous d'avoir MongoDB en cours d'exécution :
```bash
docker run -d -p 27017:27017 --name mongo mongo:7
```

Ou utilisez Docker Compose pour lancer uniquement MongoDB :
```bash
docker-compose up -d mongo
```

## 📡 API Endpoints

### Membres
- `GET /members` - Liste des membres
- `GET /members/:id` - Détails d'un membre
- `POST /members` - Créer un membre
- `PUT /members/:id` - Mettre à jour un membre
- `DELETE /members/:id` - Supprimer un membre
- `GET /members/stats/overview` - Statistiques des membres

### Événements
- `GET /events` - Liste des événements
- `GET /events/:id` - Détails d'un événement
- `POST /events` - Créer un événement
- `PUT /events/:id` - Mettre à jour un événement
- `DELETE /events/:id` - Supprimer un événement
- `POST /events/:id/participate` - Participer à un événement
- `DELETE /events/:id/participate/:memberId` - Annuler participation
- `GET /events/stats/overview` - Statistiques des événements

### Authentification
- `POST /auth/login` - Connexion

### Health Check
- `GET /health` - Vérification de l'état de l'API

## 🗄️ Base de données

MongoDB est utilisé pour stocker :
- **Members**: Informations des membres
- **Events**: Événements de l'association

Les schémas sont définis dans `backend/src/*/schemas/`

## 🔧 Configuration

Les variables d'environnement peuvent être configurées dans un fichier `.env` à la racine :

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://mongo:27017/27degres
FRONTEND_URL=http://localhost:4200
```

## 📝 Notes

- Le frontend utilise Nginx en production pour servir les fichiers statiques
- Le backend expose l'API sur le port 3000
- MongoDB persiste les données dans un volume Docker
- CORS est configuré pour permettre les requêtes depuis le frontend

## 🧪 Tests

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## 📦 Build pour production

### Avec Docker
```bash
docker-compose build
docker-compose up -d
```

### Sans Docker

**Backend:**
```bash
cd backend
npm run build
npm run start:prod
```

**Frontend:**
```bash
cd frontend
npm run build
# Servir dist/27degres/browser avec un serveur web
```

## 🐛 Dépannage

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

### Port déjà utilisé
Modifiez les ports dans `docker-compose.yml` si nécessaire.
