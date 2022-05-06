//első feladat
const onea = ()=>{console.log("Tanultam a dogára")} //2p -1 ha nem loggol vagy nem function
const oneb = (num1, num2)=>{alert(parseFloat(num1)/parseFloat(num2))} //3p -1p ha nem parseFloat, nem alert vagy nem function
const onec = (num)=>{return (num**3)**2} //2p -1 ha nem return vagy nem function
//második feladat
for (let i = 50; i < 401; i++){console.log(i);} //4p -1p ha csak 399ig számol vagy nem 50kezdi, loggol vagy nem loopal csinálja
let temp = prompt("hány szor fussak le?") //1p
for (let i = 0; i < temp ; i++){console.log(`${i} + Alma`);} //3p a pont arra jár ha anyiszor fut le amenyit megadot, forral csinálja, helyesne loggol
//harmadik feladat
let mainlist = [] //1p
const three = (list, w)=>{list.push(w)} //2p
//negyedik feladat
const four = (num1, num2)=>{ //2p
    if(num1 == num2){return true}
    else{return false}
}
const main = () =>{onea();oneb(5, 2);onec(5);three(mainlist, "alma");four(1,3);}
//20-18 ==> 5
//18-15 ==> 4
//15-10 ==> 3
//5-10 ==> 2
//0-5 ==> 1