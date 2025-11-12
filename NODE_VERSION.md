# Version Node.js recommandée

## Versions supportées

- **Node.js**: v18.x LTS, v20.x LTS, ou v22.x (actuellement installé: v22.21.1)
- **Angular CLI**: ^20.3.0
- **TypeScript**: ~5.8.0

## Installation de Node.js v22

Node.js v22.21.1 est maintenant installé et configuré comme version par défaut.

Pour vérifier votre version :
```bash
node -v
npm -v
```

## Solutions alternatives

### Option 1: Utiliser NVM (recommandé)

Si vous avez NVM installé :

```bash
# Installer Node.js v22 (déjà fait)
nvm install 22
nvm use 22
nvm alias default 22

# Puis installer les dépendances
make install
make dev-frontend
```

### Option 2: Utiliser Docker (le plus fiable)

```bash
# Lancer avec Docker (évite les problèmes de version Node.js)
docker-compose -f docker-compose.dev.yml up frontend
```

### Option 3: Changer de version Node.js

```bash
# Utiliser Node.js v20 LTS
nvm install 20
nvm use 20

# Ou Node.js v18 LTS
nvm install 18
nvm use 18
```

