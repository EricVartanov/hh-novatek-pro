"use strict";

window.onload = function () {
    // /* Function Block Scroll */  останока скролла при открытии модалки
    var blockScroll = function (state) {
        if (state == "open") {
            setTimeout(function () {
                if (!document.body.hasAttribute("data-body-scroll-fix")) {
                    let scrollPosition =
                        window.pageYOffset ||
                        document.documentElement.scrollTop; // Получаем позицию прокрутки
                    let body = document.body;
                    body.setAttribute("data-body-scroll-fix", scrollPosition); // Cтавим атрибут со значением прокрутки
                    body.style.overflow = "hidden";
                    body.style.position = "fixed";
                    body.style.top = "-" + scrollPosition + "px";
                    body.style.left = "0";
                    body.style.right = "0";
                    if (body.height < window.height) {
                        /*  console.log('меньше') */
                        body.style.bottom = "0";
                    }
                }
            }, 10);
        }
        if (state == "close") {
            if (document.body.hasAttribute("data-body-scroll-fix")) {
                let scrollPosition = document.body.getAttribute(
                    "data-body-scroll-fix"
                ); // Получаем позицию прокрутки из атрибута

                document.body.removeAttribute("data-body-scroll-fix"); // Удаляем атрибут
                document.body.style.overflow = "";
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.left = "";
                document.body.style.right = "";

                window.scroll(0, scrollPosition); // Прокручиваем на полученное из атрибута значение
            }
        }
    };
    //----------------------//

    // открытие/закрытие модального окна

    let btn = document.querySelector(".idc-modal-btn");
    btn.addEventListener("click", function () {
        let nav = document.querySelector(".idc-nav-block");
        nav.classList.toggle("open");
        if (nav.classList.contains("open")) {
            blockScroll("open");
        } else {
            blockScroll("close");
        }
    });
    // закрытие модалки при клике в любом месте окна браузера

    window.addEventListener("click", (e) => {
        // при клике в любом месте окна браузера
        let nav = document.querySelector(".idc-nav-block");
        const target = e.target; // находим элемент, на котором был клик
        if (
            !target.closest(".idc-modal-btn") &&
            !target.closest(".idc-logo") &&
            nav.classList.contains("open")
        ) {
            nav.classList.remove("open");
            blockScroll("close");
        }
    });

    // плавный скролл вверх
    var VacanciesBlock = document.querySelector(".idc-nav");

    let AnimationScroll = function () {
        var startY = VacanciesBlock.getBoundingClientRect().top;
        var direction = startY < 0 ? -1 : startY > 0 ? 1 : 0;
        var duration = 500;
        var start = new Date().getTime();
        var fn = function () {
            // текущее положение верхней границы контейнера с учётом высоты шапки с меню
            // при прокрутке контейнер не должен заходить под шапку
            var top = VacanciesBlock.getBoundingClientRect().top,
                // время прошедшее от начала анимации прокручивания страницы
                now = new Date().getTime() - start,
                // величина прокрутки страницы за один цикл функции 'fn'
                result = Math.round((top * now) / duration);

            // корректируем значение 'result', чтобы контейнер остановился
            // точно по нижней границе шапки
            result =
                result > direction * top
                    ? top
                    : result == 0
                    ? direction
                    : result;

            // если верхняя граница контейнера не достигла нижней границы шапки
            if (direction * top > 0) {
                // прокручиваем страницу на величину result
                window.scrollBy(0, result);
                // рекурсивно запускаем функцию анимации прокрутки страницы
                requestAnimationFrame(fn);
            }
        };
        // старт анимации прокрутки страницы
        requestAnimationFrame(fn);
    };

    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    var Button = document.querySelector(".idc-up-btn");
    Button.addEventListener("click", function (e) {
        e.preventDefault();
        AnimationScroll();
    });

    // выбор вакансий
    let vacancies = document.querySelectorAll(".idc-vacancy-item");
    for (let vacancy of vacancies) {
        vacancy.addEventListener("click", function (e) {
            e.preventDefault();
            vacancy.classList.toggle("checked");
            // console.log("click");
        });
    }

    //ссылка подробнее на страницу развития.
    let devBtn = document.querySelector(".idc-dev-btn");
    devBtn.addEventListener("click", function (e) {
        let menuLink = document.querySelector(
            '.idc-menu__link[data-id="idc-dev"]'
        );
        menuLink.classList.add("clicked");
        e.preventDefault();
        document.querySelector("#idc-main.open").classList.remove("open");
        document.querySelector("#idc-dev").classList.add("open");
        changeMenu();
    });
    // смена цвета меню в зависимост от страницы
    function changeMenu() {
        let navMenu = document.querySelector(".idc-menu");
        let modalBtn = document.querySelector(".idc-modal-btn");

        if (!document.querySelector("#idc-main.open")) {
            navMenu.classList.add("grey");
            modalBtn.classList.add("blue");
        } else if (
            document.querySelector("#idc-main.open") &&
            navMenu.classList.contains("grey")
        ) {
            navMenu.classList.remove("grey");
            modalBtn.classList.remove("blue");
        }
    }

    // выбор разделов
    let menuBtns = document.querySelectorAll(".idc-menu__link");

    for (let menuBtn of menuBtns) {
        function changePage() {
            //функция смены разделов меню и страниц
            menuBtn.classList.add("clicked");
            let attr = menuBtn.getAttribute("data-id");
            // console.log(attr);
            let pageId = document.querySelector("#" + attr);
            if (!document.querySelector(".idc-page.open")) {
                pageId.classList.add("open");
            } else {
                document
                    .querySelector(".idc-page.open")
                    .classList.remove("open");
                pageId.classList.add("open");
            }
        }

        menuBtn.addEventListener("click", function (e) {
            e.preventDefault();

            if (!document.querySelector(".idc-menu__link.clicked")) {
                //проверка на наличие открытой страницы
                changePage(); // вызов функции смены разделов меню и страниц
                changeMenu();
            } else {
                document
                    .querySelector(".idc-menu__link.clicked")
                    .classList.remove("clicked");
                changePage();
                changeMenu();
            }
        });
    }

    /// нажатие на кнопку подробнее на странице проектов
    let projectBtns = document.querySelectorAll(".idc-btn");

    for (let projectBtn of projectBtns) {
        projectBtn.addEventListener("click", function (e) {
            e.preventDefault();
            document
                .querySelector("#idc-projects.open")
                .classList.remove("open");
            document.querySelector("#idc-info").classList.add("open");
            let btnAttr = projectBtn.getAttribute("data-page");
            console.log(btnAttr);
            let pages = document.querySelectorAll(".idc-info-page");
            for (let page of pages) {
                let pageAttr = page.getAttribute("data-page");
                console.log(pageAttr);
                if (pageAttr === btnAttr) {
                    page.classList.add("open");
                } else {
                    page.classList.remove("open");
                }
            }
        });
    }

    /// нажатие на кнопки сайдбара
    let pageNames = document.querySelectorAll(".idc-project-name");
    for (let pageName of pageNames) {
        pageName.addEventListener("click", function (e) {
            e.preventDefault();
            let pageNameAttr = pageName.getAttribute("data-page");
            let pages = document.querySelectorAll(".idc-info-page");
            for (let page of pages) {
                let pageAttr = page.getAttribute("data-page");
                if (pageAttr === pageNameAttr) {
                    page.classList.add("open");
                } else {
                    page.classList.remove("open");
                }
            }
        });
    }
};
