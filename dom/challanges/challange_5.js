const images = [
    {
        src: "https://picsum.photos/id/1015/600/300",
        caption: "Beautiful Mountains"
    },
    {
        src: "https://picsum.photos/id/1025/600/300",
        caption: "Cute Dog"
    },
    {
        src: "https://picsum.photos/id/1043/600/300",
        caption: "Forest"
    },
    {
        src: "https://picsum.photos/id/1069/600/300",
        caption: "Ocean"
    }
];

const image = document.getElementById("image");
const caption = document.getElementById("caption");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const autoBtn = document.getElementById("auto-btn");
const dotsContainer = document.getElementById("dots");
const timerText = document.getElementById("timer");

let currentIndex = 0;
let interval = null;
let countdown = 3;


function showImage(index){

    image.src = images[index].src;
    caption.innerText = images[index].caption;

    updateDots();
}


function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);

    countdown = 3;
    timerText.innerText = countdown;

}


function previousImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);

    countdown = 3;

}


nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", previousImage);


images.forEach((img,index)=>{

    const dot = document.createElement("span");

    dot.classList.add("dot");

    dot.addEventListener("click",()=>{

        currentIndex = index;

        showImage(currentIndex);

        countdown = 3;

    });

    dotsContainer.appendChild(dot);

});


function updateDots(){

    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot,index)=>{

        if(index===currentIndex){
            dot.classList.add("active");
        }else{
            dot.classList.remove("active");
        }

    });

}


function startAuto() {

    clearInterval(interval);

    countdown = 3;
    timerText.innerText = countdown;

    interval = setInterval(() => {

        countdown--;
        timerText.innerText = countdown;

        if (countdown === 0) {
            nextImage();
        }

    }, 1000);
}

function stopAuto() {
    clearInterval(interval);
    interval = null;
}

autoBtn.addEventListener("click",()=>{

    if(interval==null){

        startAuto();

        autoBtn.innerText = "Stop Auto Play";

    }else{

        stopAuto();

        autoBtn.innerText = "Start Auto Play";

    }

});


showImage(currentIndex);