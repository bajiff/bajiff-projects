(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

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



// Scroll Header Transparan
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// End Scroll Header Transparan
