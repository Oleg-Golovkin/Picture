const accordion = () => {
    const btn = document.querySelector(".button-transparent"),
        row = document.querySelector("#row");

    // styles2.forEach(item => {
    //     item.classList.add("animate__animated", "animate__fadeInDown");
    //     item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
    //     item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
    // });

    btn.addEventListener("click", (e) => {
        // styles2.forEach(item => {
        //     item.style.display = "block";
        //     item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
        //     item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");

        // });

        // 1.3. Настраиваем механизм отправки данных на сервер
        // async - чтобы функция выполнилась после получения данных
        // с сервера.
        // Вместо url в пункте 1.2. подставится адрес
        // Вместо request в пункте 1.2. подставится то, что
        // будем отправлять на сервер - new FormData(form)
        const post = async function (url) {
            let res = await fetch(url);
            // Возвращаем полученный ответ от сервера о том, что
            // информация отправлена .then или нет .catch
            return await res.json();
        };

        post("../assets/db.json")
            // 1.4.  Можем проверить, ушли ли инф. на сервер.
            // Через Promise
            // При положительном варианте событий при повторном
            // обращении к .then можем выполнять действия
            .then(data => {
                data.styles.forEach(item => {
                    console.log(item);
                    const div = document.createElement("div");
                    div.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1", "animate__animated", "animate__fadeInDown");
                    div.innerHTML = `<div class=styles-block>
						<img src=${item.src} alt>
						<h4>${item.title}</h4>
						<a href="#">Подробнее</a>
					</div>`;
                    row.append(div);
                });
            })
            .catch(() => {
                console.log("нет");
            })
            .finally(() => {
                e.target.remove();
            });
    });


};


export default accordion;