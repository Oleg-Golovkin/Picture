const scrollTop = () => {
    // Помещаем дочерний элемент кнопки - изображение
    const upElem = document.querySelector(".scroll__img");
    upElem.style.display = "none";
    // Появлие и исчезновение кнопки после определенной прокуртки
    window.addEventListener('scroll', () => {
        console.log(document.documentElement.scrollTop);
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
    let links = document.querySelectorAll('.scroll'),
    // Скорость прокрутки
        speed = 0.2;

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                // Получаем блок, куда будет сролится страница
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

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