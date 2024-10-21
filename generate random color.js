let btn=document.querySelector("button");
function generate()
{
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let final=`rgb(${red},${green},${blue})`
return final;
}

btn.addEventListener("click",function()
{
let h3=document.querySelector("h3");
let div=document.querySelector("div");
let colors=generate();
h3.style.color=colors;
h3.innerText=colors;
div=div.style.backgroundColor=colors;


})
