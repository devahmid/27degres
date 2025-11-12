# Configuration de Node.js v22

## Problème actuel

Votre terminal utilise encore Node.js v21.7.2 au lieu de v22.21.1 qui est installé.

## Solution : Configurer Node.js v22 par défaut

### Option 1: Dans votre terminal actuel

```bash
# Charger nvm
source ~/.nvm/nvm.sh

# Utiliser Node.js v22
nvm use 22

# Configurer comme version par défaut
nvm alias default 22

# Vérifier
node -v  # Devrait afficher v22.21.1
```

### Option 2: Ajouter à votre fichier de configuration shell

Ajoutez ces lignes à votre `~/.zshrc` (ou `~/.bashrc` si vous utilisez bash) :

```bash
# Charger nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Utiliser Node.js v22 par défaut
nvm use 22 2>/dev/null || nvm use default 2>/dev/null
```

Puis rechargez votre shell :
```bash
source ~/.zshrc
# ou
source ~/.bashrc
```

### Option 3: Utiliser Docker (recommandé si vous avez des problèmes)

Le script `dev.sh` utilise automatiquement Docker si Node.js v21 est détecté :

```bash
make dev-frontend
```

## Vérification

Après configuration, vérifiez que Node.js v22 est utilisé :

```bash
node -v    # Devrait afficher v22.21.1
npm -v     # Devrait afficher 10.9.4
```

## Lancer le frontend

Une fois Node.js v22 configuré :

```bash
# Installer les dépendances (si pas déjà fait)
make install

# Lancer le frontend
make dev-frontend
```

L'application sera accessible sur http://localhost:4200

