const swiper1 = new Swiper(".idc-swiper", {
    // Default parameters
    breakpoints: {
        320: {
            slidesPerView: "auto",
        },
        700: {
            slidesPerView: 3,
        },
    },
    loop: false,
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 0,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    watchOverflow: true,
    grabCursor: false,
    pagination: {
        el: ".idc-swiper-pagination",
        type: "bullets",
    },
});

const swiper2 = new Swiper(".idc-swiper-2", {
    // Default parameters
    breakpoints: {
        320: {
            slidesPerView: 1,
            loop: true,
        },

        1020: {
            slidesPerView: 3,
            loop: false,
        },
    },
    direction: "horizontal",
    spaceBetween: 0,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    watchOverflow: true,
    grabCursor: false,
    pagination: {
        el: ".idc-swiper-pagination-2",
        type: "bullets",
    },
});

const swiper3 = new Swiper(".idc-swiper-3", {
    // Default parameters
    breakpoints: {
        700: {
            slidesPerView: "auto",
        },
    },
    direction: "horizontal",
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    watchOverflow: true,
    grabCursor: true,
    loop: false,
    pagination: {
        el: ".idc-swiper-pagination-3",
        type: "bullets",
    },
    navigation: {
        nextEl: ".idc-swiper-button-next",
        prevEl: ".idc-swiper-button-prev",
    },
});
