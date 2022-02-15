const slider = () => {
    function sliders({
        slideSelector,
        nextSlideSelector,
        prevSlideSelector,
        horizontally
    }) {
        const slide = document.querySelectorAll(slideSelector),
            nextSlide = document.querySelector(nextSlideSelector),
            prevSlide = document.querySelector(prevSlideSelector);

        let indexSlide = 1;

        showSlide(indexSlide);

        // 3. showSlide запускается с цифрой 2 (то, 
        // что получилось в nextSlide)
        // Не записывать в функцию сам indexSlide, 
        function showSlide(n) {
            // 3.1 Прокрутка слайдов по кругу
            // при достижении верхнего слайда
            if (n > slide.length) {
                //  Если то, что получилось в showSlide
                // больше общего количества слайлов, то
                // возвращаемся к первому слайду            
                indexSlide = 1;
            }
            // 3.1 При достижении ниже
            // перого слайда
            if (n < 1) {
                indexSlide = slide.length;
            }

            // 3.2 Удаляем все слайды
            slide.forEach(item => {
                item.style.display = "none";
                item.classList.add("animate__animated");
            });

            // 3.3. Показываем слайд с соответствующим 
            // индексом. По умолчанию 1
            slide[indexSlide - 1].style.display = "block";
            /* добавляем один из по порядку */
            // -1, поскольку первый слайд под
            // индексом 0     
        }

            try {
                // 2. При нажатии кнопки вперед к счетчику
                // прибавляется либо отнимается 1
                nextSlide.addEventListener('click', () => {
                    showSlide(indexSlide += 1);
                    slide[indexSlide - 1].classList.remove("animate__backInLeft");
                    slide[indexSlide - 1].classList.add("animate__backInRight");
                });

                prevSlide.addEventListener('click', () => {
                    showSlide(indexSlide += -1);
                    slide[indexSlide - 1].classList.remove("animate__backInRight");
                    slide[indexSlide - 1].classList.add("animate__backInLeft");

                });
            } catch (e) {}

        if(!horizontally) {
            setInterval(function(){
                showSlide(indexSlide += 1);
                slide[indexSlide - 1].classList.add("animate__backInUp");
            }, 3000);
            
        }


    }

    // Слайдер с отзывами
    sliders({
        slideSelector: ".feedback-slider-item",
        nextSlideSelector: ".main-next-btn",
        prevSlideSelector: ".main-prev-btn",
        horizontally: true
    });

    // Слайдер портрет на холсте
    sliders({
        slideSelector: ".main-slider-item",
        horizontally: false
    });
};

export default slider; 