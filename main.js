//functionok ismétlés
function pelda1(){
    console.log("valami");
}
pelda1() // <== meghivás (kiírja a consoleba hogy: valami)

function pelda2(num1, num2){
    alert(num1*num2);
}
pelda2(3, 5) // <== meghivás (ki alerteli a két meghívott szám szorzatát ==> 3*5 = 15)

function pelda3(num){
    return num**2;
}
pelda3(3)// <== meghivás (vissza adja a meghívott érték négyzetét ==> 3*3 = 9)


//loopok ismétlés
for (let i = 20; i < 101; i++){ //20szal kezdődik -> 100ig megy mert amikor i=(101) akkor már nem kissebb mint 101 
    console.log(i); //kiírja az aktuális számot consolba 
}

let temp = prompt("hány órát gyakoróltál?"); //létre hozzunk egy temp változót ami egyenlő lesz a USERtől kapot számmal
for (let i = 0; i < temp ; i++){ //i 0 val kezdővik és annyiszor fut le ami a tempben van.
    console.log("+1 óra");//ki írja a consoleba hogy "+1 óra"
}
//listák ismétlés
let mainlist = [] //létre hozzunk egy üres listát
mainlist.push("alma"); //hozzáadjuk a 0adik indexre "almát"
mainlist.push("körte"); //hozzáadjuk a 1első indexre "körtét"
console.log(mainlist); //a consolba ezt fogod látni ==> ['alma', 'körte']

//if ismétlés
let a = 1 
let b = 2 

//ha több feltéttelt vizsgálunk csak az első if utána mindig else if.
if (a > b) { //ha a > b akkor ez
    console.log("a > b");
}
else if(a == b){ //ha a == b akkor ez
    console.log("a == b");
} 
else if(a < b){ //ha a < b akkor ez
    console.log("a < b");
} 
else{ //minden más esetben
    console.log("valszeg nem számot adtál meg");
}
