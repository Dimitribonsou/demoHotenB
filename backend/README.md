# HotenB Backend API

Fastify GraphQL API pour la gestion de propriétés immobilières et leurs équipements.

## 🚀 Stack Technique

- **Runtime**: Node.js avec TypeScript
- **Framework Web**: Fastify 5.8.5
- **API GraphQL**: Mercurius
- **ORM**: Prisma 5.8.0
- **Database**: SQLite (développement), PostgreSQL (production)
- **Validation**: Zod
- **Logging**: Pino

## 📋 Prérequis

- Node.js 18+
- npm ou yarn

## 🔧 Installation

```bash
# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env

# Initialiser la base de données
npm run db:push
npm run db:seed

# Lancer le serveur en développement
npm run start:dev
```

## 📚 Commandes utiles

```bash
# Développement
npm run dev              # Démarrer en mode watch

# Base de données
npm run db:push          # Synchroniser le schéma
npm run db:migrate       # Créer une migration
npm run db:seed          # Remplir les données initiales
npm run db:studio        # Ouvrir l'interface Prisma

# Production
npm run build            # Compiler TypeScript
npm run start            # Lancer le serveur compilé

# Qualité du code
npm run lint             # Vérifier les types TypeScript

# Tests
npm run test             # Exécuter les tests
```

## 🎯 Architecture

```
src/
├── config/              # Configuration centralisée
├── modules/
│   └── property/        # Domaine des propriétés
│       ├── property.resolver.ts
│       ├── property.service.ts
│       ├── property.typeDefs.ts
│       └── validators.ts
├── plugins/
│   └── prisma.ts        # Instance Prisma avec gestion gracieuse
├── utils/
│   ├── errors.ts        # Classes d'erreurs personnalisées
│   └── logger.ts        # Configuration Pino
└── server.ts            # Point d'entrée Fastify
```

## 🔐 Gestion des Erreurs

Le projet implémente une couche d'erreurs centralisée:
- `AppError`: Erreur générique avec code et statut HTTP
- `ValidationError`: Erreurs de validation Zod (400)
- `NotFoundError`: Ressource non trouvée (404)
- `DatabaseError`: Erreurs Prisma (500)

## 🧪 Validation des Données

Utilise Zod pour valider les entrées GraphQL avant la sauvegarde:
- Validation au niveau du resolver
- Messages d'erreur détaillés
- Type safety complet

## 📊 API GraphQL

### Requête

```graphql
query {
  properties {
    id
    title
    description
    city
    pricePerNight
    amenities {
      id
      name
    }
    createdAt
  }
}
```

### Mutation

```graphql
mutation {
  createProperty(input: {
    title: "Maison Test"
    description: "Description détaillée de la propriété"
    city: "Paris"
    pricePerNight: 150
  }) {
    id
    title
    city
  }
}
```
