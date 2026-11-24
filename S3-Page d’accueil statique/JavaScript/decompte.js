let couleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Orange", "Violet"];

// Afficher les couleurs du début à la fin
for (let i = 0; i < couleurs.length; i++) {
  console.log("Loop 1 :", couleurs[i]);
}

// Afficher les couleurs dans l’ordre inverse
for (let i = couleurs.length - 1; i >= 0; i--) {
  console.log("Loop 2 :", couleurs[i]);
}

// Afficher les couleurs aux index pairs : 0, 2 et 4
for (let i = 0; i < couleurs.length; i = i + 2) {
  console.log("Loop 3 :", couleurs[i]);
}