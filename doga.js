//első feladat (7p)
const onea = ()=>{console.log("Tanultam a dogára")} //2p -1 ha nem loggol vagy nem function
const oneb = (num1, num2)=>{alert(parseFloat(num1)/parseFloat(num2))} //3p -1p ha nem parseFloat, nem alert vagy nem function
const onec = (num)=>{return (num**3)**2} //2p -1 ha nem return vagy nem function
//második feladat(8p)
for (let i = 50; i < 401; i++){console.log(i);} //4p -1p ha csak 399ig számol vagy nem 50kezdi, loggol vagy nem loopal csinálja
let temp = prompt("hány szor fussak le?") //1p
for (let i = 0; i < temp ; i++){console.log(`${i} + teszt`);} //3p a pont arra jár ha anyiszor fut le amenyit megadot, forral csinálja, helyesne loggol
//harmadik feladat (5p)
let mainlist = [] //1p
const threea = (list, w)=>{list.push(w)} //2p pont a helyes megoldásra és a func használatára jár 
const threeb = (list, w)=>{return(list.indexOf(w))} //2p pont a helyes megoldásra és a func használatára jár 
//negyedik feladat (4p)
const four = (num1, num2)=>{ //1p pont a func használatára jár 
    if(num1 == num2){return true}//2p a pont helyes feltételre valamint a returnre jár
    else{return false}//1p a pont a returnre jár
}
const main = ()=>{onea();oneb(6, 2);onec(5);threea(mainlist, "alma");threeb(mainlist, "alma");console.log(four(1,3));console.log(four(1,1));}
main()
//24-21 ==> 5
//20-16 ==> 4
//15-12 ==> 3
//11-6 ==> 2
//5-0 ==> 1