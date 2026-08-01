const heading=document.getElementById("heading")
function changeColor(color){
    heading.style.color=color;
}
document.getElementById("red").addEventListener("click",()=>changeColor("red"))
document.getElementById("green").addEventListener("click",()=>changeColor("green"))
document.getElementById("blue").addEventListener("click",()=>changeColor("blue"))
document.getElementById("purple").addEventListener("click",()=>changeColor("purple"))
document.getElementById("reset").addEventListener("click",()=>changeColor("black"))