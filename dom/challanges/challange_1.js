const bulb=document.getElementById("bulb")
const button=document.getElementById("toggle-btn")

let isOn=false;

button.addEventListener("click",()=>{
    if(isOn){
        bulb.style.backgroundColor="black";
        bulb.style.boxShadow="none"

        document.body.style.backgroundColor='#090909'
        document.body.style.color="white"

        button.innerText="Turn On"

        isOn=false;
    }else{
        bulb.style.backgroundColor="gold";
        bulb.style.boxShadow="0 0 60px gold"
        
        document.body.style.backgroundColor="white"
        document.body.style.color="black"

        button.innerText="Turn Off"
        isOn=true
    }

})