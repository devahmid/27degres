#!/bin/bash

echo "🚀 Démarrage de l'application 27 degrés..."
echo ""

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez installer Docker d'abord."
    exit 1
fi

# Vérifier si Docker Compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez installer Docker Compose d'abord."
    exit 1
fi

echo "📦 Construction des images Docker..."
docker-compose build

echo ""
echo "🚀 Démarrage des services..."
docker-compose up -d

echo ""
echo "⏳ Attente du démarrage des services..."
sleep 5

echo ""
echo "✅ Application démarrée !"
echo ""
echo "📍 URLs:"
echo "   Frontend: http://localhost"
echo "   Backend API: http://localhost:3000"
echo "   Health Check: http://localhost:3000/health"
echo ""
echo "📋 Commandes utiles:"
echo "   Voir les logs: docker-compose logs -f"
echo "   Arrêter: docker-compose down"
echo "   Redémarrer: docker-compose restart"
echo ""

