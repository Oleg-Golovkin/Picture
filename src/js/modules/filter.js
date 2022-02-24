const filter = () => {
    const
        // Оболочка для кнопок
        portfolioMenu = document.querySelector(".portfolioMenu-menu"),
        // Все кнопки
        li = portfolioMenu.querySelectorAll("li"),
        // Облочка вызываемого контента
        portfolioWrapper = document.querySelector(".portfolio-wrapper"),
        // Весь вызываемый контент    
        div = portfolioWrapper.querySelectorAll("div");


    // Особенности фукнции.
    // 1. На каждую нажимаемую кнопку поставил событие.
    // slectorBtn - селектор кнопки.
    // Соответственно, сколько вызвал функций, столько и
    // кнопок.
    // 2. Для каждой кнопки показ опеределнного контента
    // slectorContent
    // Значит нажимаю одну кнопку slectorBtn показывается
    // один конент slectorContent, нажимаю другую (другая
    // фукнция) другой контент.
    const choice = (slectorBtn, slectorContent) => {
        // Кнопка
        let blockBtn = document.querySelector(slectorBtn),
            // Показываемый контент
            blockContent = document.querySelectorAll(slectorContent);
        blockBtn.addEventListener("click", (e) => {
            // Сникаю класс активности у всех кнопок по умолчанию
            li.forEach(li => {
                li.classList.remove("active");
            });
            // Скрываю весь контент по умолчнию
            div.forEach(li => {
                li.style.display = "none";
            });
        //     Показываю класс активности у нажимаемой кнопки
        //     (поэтому для каждой кнопки совя фукнция и поэтому
        // не стал делать через делигирование события)
            e.target.classList.add("active");
            // Показываю тот блок, которых задал в функции в качестве
            // второго параметра
            blockContent.forEach(item => {
                item.style.display = "block";
            });
        });
    };

    choice(".portfolioMenu-menu .girl", ".portfolio-wrapper .girl");
    choice(".portfolioMenu-menu .lovers", ".portfolio-wrapper .lovers");
    choice(".portfolioMenu-menu .guy", ".portfolio-wrapper .guy");
    choice(".portfolioMenu-menu .chef", ".portfolio-wrapper .chef");


};

export default filter;