const scrollTop = () => {
    // Помещаем дочерний элемент кнопки - изображение
    const upElem = document.querySelector(".scroll");
    // upElem.style.display = "none";
    // Появлие и исчезновение кнопки после определенной прокуртки
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1000) {
            upElem.classList.add('animate__animated', 'animate__fadeIn');
            upElem.classList.remove('animate__fadeOut');
            upElem.style.display = "block";

        } else {
            upElem.classList.add('animate__fadeOut');
            upElem.classList.remove('animate__fadeIn');
        }
    });

    // Scrolling with raf
    // Сама кнопка (родитель изображения) - только в виде ссылки
    // Поскольку из нее берем адрес, который должен быть аналогичен
    // уникальному селектору, который вставляем туда, куда должа
    // прокручиваться страница после нажатия на эту кнопку
    let links = document.querySelectorAll('[href^= "#"]'),
        /* [href^= "#"] все ссылки, начинающиеся на знак # */
        // Скорость прокрутки
        speed = 0.2; 

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                // hash  получение атрибута ссылки href. В нашем случае #up
                hash = this.hash,
                // Получаем верхнюю точку блока, куда будет сролится страница.
                // То есть тот блок, у которого присвоен id=up
                // 1.toBlock = document.querySelector(hash) сам блок
                // 2. .getBoundingClientRect()              доступ к его параметрам
                // 3. .top                                  получение параметра высоты
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;


            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                // console.log(start);


                let progress = time - start,
                    // Возможность прокрутки как вниз, так и вверх
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                console.log(r);
                // console.log(progress);
                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

};

export default scrollTop;