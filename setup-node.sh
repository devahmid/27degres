#!/bin/bash

# Script pour configurer Node.js v22 par défaut

echo "🔧 Configuration de Node.js v22..."

# Vérifier si nvm est installé
if [ ! -d "$HOME/.nvm" ]; then
    echo "❌ NVM n'est pas installé. Veuillez installer NVM d'abord."
    echo "   https://github.com/nvm-sh/nvm#installing-and-updating"
    exit 1
fi

# Charger nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Utiliser Node.js v22
echo "📦 Activation de Node.js v22..."
nvm use 22

# Configurer comme version par défaut
echo "⚙️  Configuration de Node.js v22 comme version par défaut..."
nvm alias default 22

# Vérifier la configuration de .zshrc
ZSHRC_FILE="$HOME/.zshrc"
if ! grep -q "NVM_DIR" "$ZSHRC_FILE" 2>/dev/null; then
    echo ""
    echo "📝 Ajout de la configuration NVM à votre .zshrc..."
    echo "" >> "$ZSHRC_FILE"
    echo "# NVM Configuration" >> "$ZSHRC_FILE"
    echo 'export NVM_DIR="$HOME/.nvm"' >> "$ZSHRC_FILE"
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> "$ZSHRC_FILE"
    echo 'nvm use 22 2>/dev/null || nvm use default 2>/dev/null' >> "$ZSHRC_FILE"
    echo "✅ Configuration ajoutée à $ZSHRC_FILE"
    echo ""
    echo "⚠️  Veuillez recharger votre shell avec : source ~/.zshrc"
    echo "   Ou ouvrir un nouveau terminal"
else
    echo "✅ NVM est déjà configuré dans .zshrc"
fi

echo ""
echo "✅ Configuration terminée !"
echo ""
echo "📋 Vérification :"
node -v
npm -v
echo ""
echo "🚀 Vous pouvez maintenant utiliser :"
echo "   make dev-frontend"

