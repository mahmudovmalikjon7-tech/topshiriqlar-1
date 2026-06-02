let number = document.getElementById("num");
number.innerHTML = Math.round(Math.random()*100);

let btn = document.getElementById("btn");
let user = document.getElementById("user");
btn.addEventListener("click",function(){
    let userText = prompt("Text kiriting");
    
    user.innerHTML = userText
})

let kub = document.getElementById("kub");
let malik = document.getElementById("btn1");
let gradus =0;
malik.addEventListener("click",function(){
    //  console.log("kub aylansin");
     kub.classList.toggle("aylan");
})

let soat = document.getElementById("soat");
let minut = document.getElementById("minut");
let secund = document.getElementById("secund");



setInterval(function(){
     let date = new Date();
 soat.innerHTML = date.getHours();
 minut.innerHTML = date.getMinutes();
 secund.innerHTML = date.getSeconds();

 },1000)

let son = document.getElementById("number");
let boshSon = 0
// let numberCount = document.getElementById("number")
function counter(m){
    boshSon +=m;
        son.innerHTML= boshSon;
        console.log(boshSon);
}



let qizil = document.getElementById("qizil")
let yashil = document.getElementById("yashil")
let blue = document.getElementById("blue")
let sariq = document.getElementById("sariq")
let pushti = document.getElementById("pushti")
let moviy_rang = document.getElementById("moviy_rang")
let sabzi_rang = document.getElementById("sabzi_rang")
let moviy_rang2 = document.getElementById("moviy_rang2")

let change = document.getElementById("change")
