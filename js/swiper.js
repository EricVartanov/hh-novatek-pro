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
