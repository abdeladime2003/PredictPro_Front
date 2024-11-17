
# PredictProb - Prédiction des Résultats et Génération d'Images

## Description

**PredictProb** est une plateforme conviviale et intelligente construite avec **React** et **Tailwind CSS** pour le frontend, et **Django** avec **Django Rest Framework (DRF)** pour le backend. Le site utilise des fonctionnalités basées sur l'**intelligence artificielle** (IA) et le **machine learning** (ML) pour prédire :

- **Les résultats des matchs** (football, basketball, etc.)
- **Les prix des transferts** dans le monde du sport
- **La génération d'images** via un modèle d'IA

Ce projet vise à offrir une interface facile à utiliser pour consulter les prédictions, générer des images, et explorer des analyses sportives avancées.

## Fonctionnalités

### Prédiction des Résultats
- Prédiction des scores de matchs en fonction des performances passées, des statistiques des joueurs, etc.
  
### Prédiction des Prix des Transferts
- Estimation des prix des joueurs dans le monde du sport en utilisant des modèles d'apprentissage automatique.

### Génération d'Images
- Génération d'images réalistes ou stylisées en utilisant un modèle d'IA, par exemple pour la création de visuels sportifs.

### Interface Conviviale
- Un design responsive et moderne développé avec **React** et **Tailwind CSS** pour une meilleure expérience utilisateur.

### API Backend avec Django et DRF
- Toutes les fonctionnalités sont accessibles via une API RESTful développée avec **Django** et **Django Rest Framework**.

## Technologies utilisées

### Frontend
- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **Tailwind CSS** : Framework CSS pour un design moderne et réactif.
- **Axios** : Pour effectuer des requêtes HTTP vers l'API backend.

### Backend
- **Django** : Framework Python pour le développement backend.
- **Django Rest Framework (DRF)** : Pour créer des API RESTful.
- **Machine Learning (ML)** : Pour les algorithmes de prédiction.
- **TensorFlow / PyTorch** : Bibliothèques pour les modèles ML (selon ton implémentation).

### Autres
- **PostgreSQL** (ou autre base de données) : Pour stocker les données des utilisateurs et des prédictions.
- **Docker** (facultatif) : Pour la gestion des environnements de développement et de production.

## Installation

### Prérequis
Avant de démarrer, assure-toi d'avoir les outils suivants installés :
- **Node.js** (pour le frontend)
- **Python 3.x** (pour le backend)
- **Docker** (facultatif, pour une installation plus facile)
- **Git** (pour cloner le repository)

### Étapes pour démarrer

#### 1. Cloner le repository

Clone le projet avec Git :

```bash
git clone https://github.com/ton-utilisateur/PredictProb.git
```

#### 2. Installer les dépendances du frontend

Va dans le répertoire du frontend et installe les dépendances :

```bash
cd frontend
npm install
```

#### 3. Démarrer le serveur de développement frontend

Lance le serveur de développement pour voir l'interface utilisateur :

```bash
npm start
```

Cela démarre le frontend sur [http://localhost:3000](http://localhost:3000).

#### 4. Installer les dépendances du backend

Va dans le répertoire du backend et installe les dépendances Python :

```bash
cd backend
pip install -r requirements.txt
```

#### 5. Appliquer les migrations et démarrer le serveur backend

Applique les migrations de la base de données :

```bash
python manage.py migrate
```

Lance le serveur backend avec :

```bash
python manage.py runserver
```

Cela démarre le backend sur [http://localhost:8000](http://localhost:8000).

#### 6. Configuration de l'API

Assure-toi que l'API pour la prédiction des résultats, des prix des transferts et la génération d'images est correctement configurée dans le backend. Vérifie que les points de terminaison sont accessibles depuis le frontend.

### Docker (facultatif)

Si tu utilises Docker, tu peux démarrer les services avec Docker Compose :

```bash
docker-compose up --build
```

Cela va démarrer à la fois le frontend et le backend dans des containers Docker.

## Structure du projet

```
/
├── frontend/                    # Code frontend
│   ├── public/                  # Fichiers statiques
│   ├── src/                     # Composants React
│   └── tailwind.config.js       # Configuration de Tailwind CSS
│
├── backend/                     # Code backend
│   ├── api/                     # API pour les prédictions et génération d'images
│   ├── users/                   # Gestion des utilisateurs
│   ├── ml_models/               # Modèles de machine learning
│   └── manage.py                # Script de gestion Django
│
├── .gitignore                   # Fichiers à ignorer par Git
├── docker-compose.yml           # Configuration Docker
└── README.md                    # Ce fichier
```

## Utilisation de l'API

### Prédiction des résultats de match

- **URL** : `/api/predict/match/`
- **Méthode** : POST
- **Paramètres** :
  - `team1`: Nom de l'équipe 1
  - `team2`: Nom de l'équipe 2
  - `date`: Date du match

### Prédiction des prix des transferts

- **URL** : `/api/predict/transfer/`
- **Méthode** : POST
- **Paramètres** :
  - `player_name`: Nom du joueur
  - `current_club`: Club actuel du joueur

### Génération d'images

- **URL** : `/api/generate/image/`
- **Méthode** : POST
- **Paramètres** :
  - `description`: Description de l'image à générer (par exemple, "match de football" ou "joueur de football stylisé")

## Contribuer

1. Fork ce repository.
2. Crée une branche (`git checkout -b feature/nouvelle-fonctionnalité`).
3. Fais tes modifications.
4. Soumets une pull request.

## Auteurs

- **Ton Nom** – Développeur principal
- **Superviseur ou mentor** – Supervisé par [Nom du superviseur]

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).
