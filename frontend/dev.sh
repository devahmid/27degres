#!/bin/bash

# Script pour lancer le frontend en développement
# Utilise Docker si Node.js n'est pas compatible

# Charger nvm si disponible
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Utiliser Node.js v22 si disponible
if command -v nvm &> /dev/null; then
    nvm use 22 2>/dev/null || nvm use default 2>/dev/null
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)

if [ "$NODE_VERSION" -eq "21" ]; then
    echo "⚠️  Node.js v$NODE_VERSION détecté. Version non recommandée pour Angular CLI."
    echo "🚀 Utilisation de Docker pour éviter les problèmes de compatibilité..."
    echo ""
    cd ..
    docker-compose -f docker-compose.dev.yml up frontend
elif [ "$NODE_VERSION" -gt "22" ] || [ "$NODE_VERSION" -lt "18" ]; then
    echo "⚠️  Node.js v$NODE_VERSION détecté. Version non recommandée pour Angular CLI."
    echo "🚀 Utilisation de Docker pour éviter les problèmes de compatibilité..."
    echo ""
    cd ..
    docker-compose -f docker-compose.dev.yml up frontend
else
    echo "✅ Node.js v$NODE_VERSION détecté. Versions supportées: v18, v20, v22"
    echo "🚀 Lancement local..."
    echo ""
    npm start
fi

