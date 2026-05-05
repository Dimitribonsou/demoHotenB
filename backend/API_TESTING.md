## 🧪 Test de l'API GraphQL

### ✅ Tests Recommandés

#### 1. Récupérer toutes les propriétés
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "{ properties { id title description city pricePerNight amenities { name } createdAt } }"
  }'
```

#### 2. Créer une nouvelle propriété
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "mutation { createProperty(input: { title: \"Villa Côte d'\''Azur\" description: \"Magnifique villa avec vue sur la mer\" city: \"Cannes\" pricePerNight: 250 }) { id title city pricePerNight } }"
  }'
```

#### 3. Via GraphiQL Interface
- Ouvrir: http://localhost:3000/graphiql
- Composer les requêtes dans l'éditeur interactif
- Voir la documentation auto-générée

### 📊 Réponse Attendue (Récupération)

```json
{
  "data": {
    "properties": [
      {
        "id": "4fe45149-0be8-46c1-a5be-d6045816cd38",
        "title": "Maison les Lièvres",
        "description": "Oasis de détente climatisée avec piscine et jacuzzi",
        "city": "Panazol",
        "pricePerNight": 120,
        "amenities": [
          { "name": "Wi-Fi" },
          { "name": "Piscine" },
          { "name": "Jacuzzi" }
        ],
        "createdAt": "2026-05-04T22:39:44.912Z"
      }
    ]
  }
}
```

### ⚠️ Erreur de Validation Attendue

En cas de données invalides:
```json
{
  "errors": [
    {
      "message": "Title must be at least 3 characters",
      "statusCode": 400,
      "code": "VALIDATION_ERROR"
    }
  ]
}
```

### 🔧 Troubleshooting

**Le serveur ne démarre pas?**
- Vérifier les logs: `npm run dev`
- Vérifier que PORT 3000 est libre
- Vérifier les variables d'env: `.env`

**Erreur de base de données?**
- Recréer la base: `npm run db:push`
- Refaire le seed: `npm run db:seed`
- Vérifier DATABASE_URL dans `.env`

**Erreurs TypeScript?**
- Exécuter: `npm run lint`
- Vérifier les imports (doivent finir par `.js`)
- Recompiler: `npm run build`
