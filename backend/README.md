# Backend API - 27 degrés

API NestJS pour l'association 27 degrés.

## 🚀 Démarrage

### Avec Docker (recommandé)
```bash
docker-compose up backend
```

### En développement local
```bash
npm install
npm run start:dev
```

L'API sera accessible sur `http://localhost:3000`

## 📡 Endpoints

### Membres
- `GET /members` - Liste des membres
- `GET /members/:id` - Détails d'un membre
- `POST /members` - Créer un membre
- `PUT /members/:id` - Mettre à jour un membre
- `DELETE /members/:id` - Supprimer un membre
- `GET /members/stats/overview` - Statistiques

### Événements
- `GET /events` - Liste des événements
- `GET /events/:id` - Détails d'un événement
- `POST /events` - Créer un événement
- `PUT /events/:id` - Mettre à jour un événement
- `DELETE /events/:id` - Supprimer un événement
- `POST /events/:id/participate` - Participer
- `DELETE /events/:id/participate/:memberId` - Annuler participation
- `GET /events/stats/overview` - Statistiques

### Authentification
- `POST /auth/login` - Connexion

## 🗄️ Base de données

MongoDB est utilisé. La connexion se fait via la variable d'environnement `MONGODB_URI`.

## 🔧 Variables d'environnement

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://mongo:27017/27degres
FRONTEND_URL=http://localhost:4200
```

