const header1 = document.querySelector(".header1");
const header2 = document.querySelector(".header2");
const header3 = document.querySelector(".header3");
const button1 = document.querySelector(".btn1");
const button2 =document.querySelector(".btn2");
const button3 =document.querySelector(".btn3");
const body = document.querySelector(".body");
const button4 =document.querySelector("#change-bg");

//styling nodes
header1.style.color ="blue";
header1.style.fontSize ="100px";
header1.style.fontWeight = "100";
header1.animate;
header2.style.color ="yellow";

button1.addEventListener("click", ()=>{
    header1.style.color ="red";
    button1.textContent = "Clicked";
})

button3.addEventListener('click',()=>{
    header2.textContent="You rock";
    header2.style.color="purple";
})

button2.addEventListener('click',()=>{
    header2.style.color ="red";

})

//change page background color
button4.addEventListener('click',()=>{
    body.style.backgroundColor ="pink";
})

/*Setattributes
var setPray = document.querySelector('.header4');
setPray.setAttribute('style', 'color: aqua; font-size: 20px;'); */

//Getattribute
// var getPray = document.querySelector('.header5');
// getPray.getAttribute('type');
// console.log(getPray);
/*var getPray = document.querySelector('.header4');
getPray.getAttribute('type');
getPray.innerHTML = 'Display something';
document.body.appendChild(getPray);*/

//Normal function
function hello(){
    console.log('hey');
}
hello();

//ES6 function
const helloy = ()=>{
console.log('es6');
}
helloy();

/*changing content onclick
header1.addEventListener("click",()=>{
    header1.style.color ="blue"
})
btn1.addEventListener('click',()=>{
    btn1.textContent =
    header3.style.color = "yellow";
})
*/

//Using setAttribute
var header4 = document.querySelector('.header4');
header4.setAttribute('style','font-size:100px; color:red;');

//conditions
let fname= "Noah";
let lname = "Kyalo";
let Aname = "Magaya";
if (fname=="Noah"){
    console.log( "Hi! Noah");
}
else if (lname=="Kyalo"){
    console.log("Hi, Mr. Kyalo");
}
else if (Aname=="Magaya"){
    console.log("Wagoina")
}
else{
    console.log("No one is present");
}
fname ="Noah";

//Array
var means = ["cars", "bicycles", "planes", "bikes"];
//adding boats and foot to the array
means.push("boats", "foot");
means.reverse;

//Objects
let person ={
    fname:'Noah', lname:'Kyalo', Age:101, Height:'12cm'
};

//Functions

let x= myFunction(4,10);
function myFunction(a,b){
    return a*b;
}
myFunction()



