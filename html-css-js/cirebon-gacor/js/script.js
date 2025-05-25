const texts = [
    "Generasi",
    "Aktif",
    "Cerdas",
    "Optimis",
    "Religius"
]

let speed = 100;
const textElement = document.querySelector(".mengetik-kata");
let textIndex = 0;
let charIndex = 0;
function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, speed)
    }
}

function eraseText() {
    if(charIndex > 0){
        textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, speed);
    } else{
        textIndex++;
        if(textIndex >= texts.length){
            textIndex = 0;
        }
        setTimeout(typeWriter, speed + 1000);
    }

    // if (textElement.innerHTML.length > 0) {
    //     textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    //     settimeout(typeWriter, 50);
    // } else {
    //     textIndex = (textIndex + 1) % texts.length;
    //     charIndex = 0;
    //     setTimeout(typeWriter,500);
    // }
}
window.onload = typeWriter;


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
