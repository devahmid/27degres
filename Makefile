.PHONY: help build up down restart logs clean

help: ## Affiche cette aide
	@echo "Commandes disponibles:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Construire les images Docker
	docker-compose build

up: ## Démarrer tous les services
	docker-compose up -d

down: ## Arrêter tous les services
	docker-compose down

restart: ## Redémarrer tous les services
	docker-compose restart

logs: ## Voir les logs de tous les services
	docker-compose logs -f

logs-backend: ## Voir les logs du backend
	docker-compose logs -f backend

logs-frontend: ## Voir les logs du frontend
	docker-compose logs -f frontend

logs-mongo: ## Voir les logs de MongoDB
	docker-compose logs -f mongo

clean: ## Nettoyer les conteneurs et volumes
	docker-compose down -v
	docker system prune -f

install: ## Installer les dépendances (local)
	cd frontend && npm install --legacy-peer-deps
	cd backend && npm install

dev-backend: ## Lancer le backend en mode développement
	cd backend && npm run start:dev

dev-frontend: ## Lancer le frontend en mode développement (utilise Docker si Node.js incompatible)
	@export NVM_DIR="$$HOME/.nvm" && [ -s "$$NVM_DIR/nvm.sh" ] && \. "$$NVM_DIR/nvm.sh" && nvm use 22 2>/dev/null || true && cd frontend && ./dev.sh

dev-frontend-local: ## Lancer le frontend localement (nécessite Node.js v18, v20 ou v22)
	@export NVM_DIR="$$HOME/.nvm" && [ -s "$$NVM_DIR/nvm.sh" ] && \. "$$NVM_DIR/nvm.sh" && nvm use 22 2>/dev/null || true && cd frontend && npm start

dev-frontend-docker: ## Lancer le frontend avec Docker (recommandé)
	docker-compose -f docker-compose.dev.yml up frontend

