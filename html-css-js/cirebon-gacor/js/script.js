//  Beranda
const textsBeranda = [
    "Generasi",
    "Aktif",
    "Cerdas",
    "Optimis",
    "Religius"
]
let speed = 100;
const beranda_mengetik = document.querySelector(".beranda-mengetik");

let textIndexBeranda = 0;
let charIndexBeranda = 0;
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
//  End Beranda


// Untuk Contact
const textsContact = [
    "Web Developer",
    "Laravel Developer",
]
const contact_mengetik = document.querySelector(".contact-mengetik");
let textIndexContact = 0;
let charIndexContact = 0;

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
// End Contact


// Onload mengetik beranda dan mengetik contact
window.onload = function () {
    if (document.querySelector(".beranda-mengetik")) {
        berandaMengetik();
    }
    if (document.querySelector(".contact-mengetik")) {
        contactMengetik();
    }
};
// End Onload mengetik beranda dan mengetik contact

// Toggle Mobile
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
    // Kalo toggle diklik
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
// End Toggle Mobile

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
    
    
    // Reset the running time animation
    resetTimeAnimation()     
}

// Menjalankan function animasi
resetTimeAnimation()
// End Kesenian

// Kuliner
const kuliners = [
	{ name: "Emily Kim", role: "Founder" },
	{ name: "Michael Steward", role: "Creative Director" },
	{ name: "Emma Rodriguez", role: "Lead Developer" },
	{ name: "Julia Gimmel", role: "UX Designer" },
	{ name: "Lisa Anderson", role: "Marketing Manager" },
	{ name: "James Wilson", role: "Product Manager" }
];

const cards = document.querySelectorAll(".kuliner-card");
const dots = document.querySelectorAll(".dot");
const kulinerName = document.querySelector(".kuliner-name");
const kulinerRole = document.querySelector(".kuliner-role");
const leftArrow = document.querySelector(".kuliner-nav-arrow.left");
const rightArrow = document.querySelector(".kuliner-nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + cards.length) % cards.length;

	cards.forEach((card, i) => {
		const offset = (i - currentIndex + cards.length) % cards.length;

		card.classList.remove(
			"center",
			"left-1",
			"left-2",
			"right-1",
			"right-2",
			"hidden"
		);

		if (offset === 0) {
			card.classList.add("center");
		} else if (offset === 1) {
			card.classList.add("right-1");
		} else if (offset === 2) {
			card.classList.add("right-2");
		} else if (offset === cards.length - 1) {
			card.classList.add("left-1");
		} else if (offset === cards.length - 2) {
			card.classList.add("left-2");
		} else {
			card.classList.add("hidden");
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentIndex);
	});

	memberName.style.opacity = "0";
	memberRole.style.opacity = "0";

	setTimeout(() => {
		memberName.textContent = kuliners[currentIndex].name;
		memberRole.textContent = kuliners[currentIndex].role;
		memberName.style.opacity = "1";
		memberRole.style.opacity = "1";
	}, 300);

	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

leftArrow.addEventListener("click", () => {
	updateCarousel(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
	updateCarousel(currentIndex + 1);
});

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		updateCarousel(i);
	});
});

cards.forEach((card, i) => {
	card.addEventListener("click", () => {
		updateCarousel(i);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowRight") {
		updateCarousel(currentIndex + 1);
	}
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			updateCarousel(currentIndex + 1);
		} else {
			updateCarousel(currentIndex - 1);
		}
	}
}

updateCarousel(0);
// End Kuliner

// Scroll Header Transparan
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// End Scroll Header Transparan
