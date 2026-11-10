# Relations et cardinalités

## Tableau des associations

| Entité A | Cardinalité A | Verbe | Cardinalité B | Entité B |
|---|---|---|---|---|
| VILLE | (1, N) | Habite | (1, 1) | AUTEUR |
| AUTEUR | (1, N) | Rédigé | (1, 1) | ARTICLE |
| CATÉGORIE | (1, N) | regroupe | (1, 1) | ARTICLE |
| ARTICLE | (0, N) | possède | (0, N) | TAG |