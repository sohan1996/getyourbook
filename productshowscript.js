// ===============================
// PRODUCT IMAGE SLIDER
// ===============================

const images = [
    "images/shoe1.png",
    "images/shoe2.png",
    "images/shoe3.png",
    "images/shoe4.png"
];

let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dots = document.querySelectorAll(".dots span");

// Update image
function showImage(index){

    if(index < 0){
        index = images.length - 1;
    }

    if(index >= images.length){
        index = 0;
    }

    currentIndex = index;

    mainImage.style.opacity = "0";

    setTimeout(()=>{

        mainImage.src = images[currentIndex];
        mainImage.style.opacity = "1";

    },200);

    updateDots();
}

// Update active dot
function updateDots(){

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");

}

// Previous
prevBtn.addEventListener("click",()=>{

    showImage(currentIndex-1);

});

// Next
nextBtn.addEventListener("click",()=>{

    showImage(currentIndex+1);

});

// Dots
dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        showImage(index);

    });

});

// Keyboard

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowLeft"){

        showImage(currentIndex-1);

    }

    if(e.key==="ArrowRight"){

        showImage(currentIndex+1);

    }

});


// ===============================
// AUTO SLIDER
// ===============================

setInterval(()=>{

    showImage(currentIndex+1);

},5000);


// ===============================
// COLOR SELECTION
// ===============================

const colors = document.querySelectorAll(".colors span");

colors.forEach(color=>{

    color.addEventListener("click",()=>{

        colors.forEach(c=>{

            c.classList.remove("active-color");

        });

        color.classList.add("active-color");

    });

});


// ===============================
// ADD TO CART
// ===============================

const cartBtn = document.querySelector(".cart");

cartBtn.addEventListener("click",()=>{

    cartBtn.innerHTML = "✔ Added";

    cartBtn.style.background = "#28a745";

    setTimeout(()=>{

        cartBtn.innerHTML = "ADD TO CART";
        cartBtn.style.background = "#18b8ff";

    },2000);

});


// ===============================
// WISHLIST
// ===============================

const wishBtn = document.querySelector(".wish");

let liked = false;

wishBtn.addEventListener("click",()=>{

    liked = !liked;

    if(liked){

        wishBtn.innerHTML = "❤ WISHLISTED";
        wishBtn.style.background = "#ffebee";
        wishBtn.style.color = "#d63031";
        wishBtn.style.borderColor = "#d63031";

    }else{

        wishBtn.innerHTML = "ADD WISHLIST";
        wishBtn.style.background = "#fff";
        wishBtn.style.color = "#555";
        wishBtn.style.borderColor = "#ddd";

    }

});


// ===============================
// HELP BUTTON
// ===============================

const help = document.querySelector(".help");

help.addEventListener("click",()=>{

    alert("How can we help you?");

});


// ===============================
// IMAGE HOVER
// ===============================

mainImage.addEventListener("mouseenter",()=>{

    mainImage.style.transform="scale(1.08)";

});

mainImage.addEventListener("mouseleave",()=>{

    mainImage.style.transform="scale(1)";

});


// ===============================
// SEARCH
// ===============================

const search = document.querySelector(".search-box input");

search.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        alert("Searching for: " + search.value);

    }

});


// ===============================
// PAGE LOADED
// ===============================

window.onload=()=>{

    showImage(0);

};