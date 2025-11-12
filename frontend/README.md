# Frontend - 27 degrés

Application Angular 20 pour l'association 27 degrés.

## 🚀 Démarrage

### Avec Docker (recommandé)
```bash
docker-compose up frontend
```

### En développement local
```bash
npm install
npm start
```

L'application sera accessible sur `http://localhost:4200`

## 🛣️ Routes

- `/` - Page d'accueil principale
- `/public` - Page d'accueil publique
- `/dashboard` - Tableau de bord membre
- `/mobile` - Version mobile
- `/admin` - Interface administrateur
- `/activities` - Page "Ce que nous faisons"

## 🎨 Technologies

- Angular 20
- Tailwind CSS
- Font Awesome
- Plotly.js (pour les graphiques admin)

## 📦 Build

```bash
npm run build
```

Les fichiers seront générés dans `dist/27degres/browser`

