# 🚀 QuickStart Guide

## Installation & Démarrage (60 secondes)

```bash
# 1. Aller dans le dossier backend
cd backend

# 2. Installer les dépendances
npm install

# 3. Initialiser la base + démarrer
npm run start:dev
```

**Résultat**: Serveur accessible à http://localhost:3000/graphiql

---

## Commandes Principales

| Commande | Utilité |
|----------|---------|
| `npm run dev` | Mode développement avec hot reload |
| `npm run build` | Compiler TypeScript → JavaScript |
| `npm run start` | Lancer l'app compilée (production-like) |
| `npm run db:push` | Synchroniser le schema Prisma |
| `npm run db:seed` | Remplir la BD avec données test |
| `npm run db:studio` | Interface visuelle Prisma |
| `npm run lint` | Vérifier les erreurs TypeScript |

---

## Architecture Clé

### Couches
1. **Resolver** (GraphQL) → reçoit les requêtes
2. **Service** (Business Logic) → logique métier
3. **Prisma** (ORM) → accès base de données

### Erreurs
- `ValidationError` - Données invalides (400)
- `NotFoundError` - Ressource inexistante (404)
- `DatabaseError` - Erreur BD (500)

### Logging
- **Dev**: Colorisé + détaillé
- **Prod**: JSON + optimisé performance

---

## Tests Basiques

### Via GraphiQL (http://localhost:3000/graphiql)

```graphql
# Récupérer les propriétés
query {
  properties {
    id title city pricePerNight
  }
}

# Créer une propriété
mutation {
  createProperty(input: {
    title: "Ma Maison"
    description: "Une belle maison avec jardim"
    city: "Lyon",
    image: "https://unsplash.com/fr/photos/une-maison-a-un-etage-avec-un-grand-portique-et-un-toit-en-pente-2i_8R7h891Q",
    pricePerNight: 150
  }) {
    id title
  }
}
```

---

## Fichiers Importants

- 📄 **README.md** - Documentation complète
- 📄 **API_TESTING.md** - Guide de test
- 📁 **src/** - Code source
- 📁 **prisma/** - Schema + seed

---

## ⚠️ Variables d'Environnement

Fichier `.env`:
```
PORT=3000
HOST=0.0.0.0
NODE_ENV=development
DATABASE_URL=file:./dev.db
LOG_LEVEL=debug
```

---

## 🎯 Status

- ✅ TypeScript: Strict type checking activé
- ✅ API: GraphQL opérationnelle
- ✅ Base de données: Prisma intégrée
- ✅ Validation: Zod en place
- ✅ Logging: Pino configuré
- ✅ Errors: Gestion centralisée
- ✅ Hot reload: En mode dev

**Everything is working! 🎉**
