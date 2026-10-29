let ages = [27, 14, 35, 8, 35, 19, 8, 22];
let recherche = 19;

let maximum = ages[0];
let positionMax = 0;
let minimum = ages[0];
let positionMin = 0;
let position = -1;

for(let i = 1; i< ages.length; i++){
    if(ages[i] > maximum){
        maximum = ages[i];
        positionMax = i;
    }

    if(ages[i] < minimum){
        minimum = ages[i];
        positionMin = i;
    }
}

console.log("Maximum : ", maximum, "(Index : ", positionMax, ")" );
console.log("Minimum : ", minimum, "(Index : ", positionMin, ")" );

for(let a = 0; a < ages.length; a++){
    if(ages[a] === recherche){
        position = a;
        break;
    }
}

if(position!==-1){
    console.log("La valeur 19 est presente a lindex : ", position);
}else{
    console.log("la valeur introuvable.");
}