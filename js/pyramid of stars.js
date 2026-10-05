let height = 10; 
let i = 1;
while (i <= height){
     let test = "";
    let e = 1;
while(e <= height - i ){
    test = test + " ";
    e++
}
let a = 1;
while(a <= 2* i -1){
    test = test + "*";
    a++
}
i++
console.log(test);
}
