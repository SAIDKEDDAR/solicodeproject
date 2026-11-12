let age = 18;
let hasTicket = true;
let isVIP = false;
if (age < 18){
    console.log("Not allowed");
} else if(hasTicket === false) {
console.log("No ticket")
} else if ( hasTicket === true && isVIP ===true){
    console.log("VIP access")
}else{
    console.log("Normal access")
}
