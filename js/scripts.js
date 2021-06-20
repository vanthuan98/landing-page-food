
// menu on scroll
let headerMain = document.querySelector('.header-main');
let menuMain = document.querySelector('.menu-main');
window.onscroll = function() {
    if (window.scrollY >= 60) {
        headerMain.style.position = 'fixed';
        headerMain.style.width = '100%';
        headerMain.style.background = '#fff';
        headerMain.style.top = '0';
        headerMain.style.left = '0';
        headerMain.style.zIndex = 1;

        menuMain.style.color = '#e22118';
    } else {
        headerMain.style.position = 'inherit';
        menuMain.style.color = '#111';
    }
}

// swiper js
var swiper = new Swiper(".myRecipesCarousel", {
    slidesPerView: 2,
    spaceBetween: 8,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    loop: true,
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 16,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 24,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 32,
        },
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});

var swiper = new Swiper(".myTestimonialCarousel", {
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false
    // },
    loop: true,
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 16,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 24,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 32,
        },
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});

// menu toggle 
let menuBar = document.querySelector('.menu-bar');
menuBar.onclick = function () {
    if (menuMain.classList.value.indexOf('show-menu') == -1) {
        menuMain.classList.add('show-menu');
    } else {
        menuMain.classList.remove('show-menu');
    }
};