let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let nombreVentes = 0;
let sommeVentes = 0;
let maximum = ventes[0];
let minimum = ventes[0];
let nombreExceptionnelles = 0;
let sommeExceptionnelles = 0;

for (let i = 0; i < ventes.length; i++) {
  let vente = ventes[i];

  nombreVentes++;
  sommeVentes += vente;

  if (vente > maximum) {
    maximum = vente;
  }

  if (vente < minimum) {
    minimum = vente;
  }

  if (vente >= 130) {
    nombreExceptionnelles++;
    sommeExceptionnelles += vente;
  }
}

console.log("Total number of sales :", nombreVentes);
console.log("Total turnover :", sommeVentes);
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
console.log("Number of exceptional sales :", nombreExceptionnelles);
console.log("Exceptional sales turnover :", sommeExceptionnelles);