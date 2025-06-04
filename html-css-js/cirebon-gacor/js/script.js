const textsBeranda = [
    "Generasi",
    "Aktif",
    "Cerdas",
    "Optimis",
    "Religius"
]
const textsContact = [
    "Web Developer",
    "Laravel Developer",
]

let speed = 100;
const beranda_mengetik = document.querySelector(".mengetik-kata");
const contact_mengetik = document.querySelector(".contact-mengetik");


let textIndexBeranda = 0;
let charIndexBeranda = 0;
let textIndexContact = 0;
let charIndexContact = 0;
function berandaMengetik() {
    if (charIndexBeranda < textsBeranda[textIndexBeranda].length) {
        beranda_mengetik.innerHTML += textsBeranda[textIndexBeranda].charAt(charIndexBeranda);
        charIndexBeranda++;
        setTimeout(berandaMengetik, speed);
    } else {
        setTimeout(eraseTextBeranda, speed)
    }
}

function eraseTextBeranda() {
    if (charIndexBeranda > 0) {
        beranda_mengetik.innerHTML = textsBeranda[textIndexBeranda].substring(0, charIndexBeranda - 1);
        charIndexBeranda--;
        setTimeout(eraseTextBeranda, speed);
    } else {
        textIndexBeranda++;
        if (textIndexBeranda >= textsBeranda.length) {
            textIndexBeranda = 0;
        }
        setTimeout(berandaMengetik, speed + 1000);
    }
}



function contactMengetik() {
    if (charIndexContact < textsContact[textIndexContact].length) {
        contact_mengetik.innerHTML += textsContact[textIndexContact].charAt(charIndexContact);
        charIndexContact++;
        setTimeout(contactMengetik, speed);
    } else {
        setTimeout(eraseTextContact, speed)
    }
}

function eraseTextContact() {
    if (charIndexContact > 0) {
        contact_mengetik.innerHTML = textsContact[textIndexContact].substring(0, charIndexContact - 1);
        charIndexContact--;
        setTimeout(eraseTextContact, speed);
    } else {
        textIndexContact++;
        if (textIndexContact >= textsContact.length) {
            textIndexContact = 0;
        }
        setTimeout(contactMengetik, speed + 1000);
    }
}


window.onload = function() {
    contactMengetik();
    berandaMengetik();
};

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");

    function handleMenuToggle() {
        if (menuToggle.checked) {
            navMenu.classList.add("show");
            hamburger.classList.add("active");
        } else {
            navMenu.classList.remove("show");
            hamburger.classList.remove("active");
        }
    }

    // Saat toggle diklik
    menuToggle.addEventListener("click", handleMenuToggle);

    // Reset saat resize ke desktop
    window.addEventListener("resize", function () {
        if (window.innerWidth > 995) {
            menuToggle.checked = false;
            navMenu.classList.remove("show");
            hamburger.classList.remove("active");
        }
    });
});

// Kesenian
let nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function () {
    showSlider('next')
}

prevBtn.onclick = function () {
    showSlider('prev')
}

let runTimeOut

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if (type === 'next') {
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()
// End Kesenian

// Scroll Biar ada 
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
