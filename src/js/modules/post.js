
// Отправка информации json

const forms = document.querySelectorAll("form");


    const statusMassege = {
        error: "Ошибка",
        load: "Идет загрузка",
        ok: "Данные отправлены. Вскоре мы с Вами свяжемся!"
    };

    const postForm = async (url, request) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: request
        });
        return await res.json();
        // возвращаем наверх (функцию pastForm)
        //  результат ответа (команда res.json()) 
        // запроса на сервер,
        // чтобы в дальншейшем обрабатывать через Promise
        //  этот ответ
    };

    forms.forEach(item => {
        sendinForm(item);
    });

     // Адресс сервера в зависимости от вида изображения
     let path;
     if (form.closest(".popup-design")) {
         path = "assets/picture.php";
     } else {
         path = "assets/server.php";
     }

    function sendinForm(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            // Вместо перебора
            // const object = {};
            // formData.forEach((value, key) => {
            //     object[key] = value;
            // });

            // Делаем преобразование
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postForm("http://localhost:3000/requests", json)
                .then(data => {
                    console.log(data);
                    ShowThanksModal(statusMassege.ok);
                })
                .catch(() => {
                    ShowThanksModal(statusMassege.error);
                })
                .finally(() => {
                    form.reset();
                });

        });
    }


// Отправка текстовой информаци
forms.forEach(form => {
            postForms(form);
        }); 
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };


    // 1. На каждую форму вешаем обработчик события.
    // с событием submit
    form.addEventListener("submit", (e) => {
           e.preventDefault();
        // 1.1. Информация, введенная форму, собирается
        // в специальном объекте new FormData(form)
        const formData = new FormData(form);
        // НЕ ОБЯЗАТЕЛЬНЫЙ БЛОК
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.appendChild(statusMessage);
        // 1.2. Отправляем данные на сервер. Выполняется 
        функция post, тело которой описано 
        в пункте п. 1.3       
        post("assets/server.php", formData)
            // 1.4.  обрабатываем то, что получили
		   в res.text();
            // При положительном варианте событий при 
            повторном обращении к .then можем выполнять  
            действия
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
            })
            .catch(() => {
                console.log('хуй');
                statusMessage.textContent = message.failure;
            })
            .finally(() => {
                form.reset();
            });
    });

    // 1.3. Настраиваем механизм отправки данных 
    на сервер async - чтобы функция выполнилась
     после получения данных с сервера.
    // Вместо url в пункте 1.2. подставится адрес
    // Вместо request в пункте 1.2. подставится то, что
    // будем отправлять на сервер - new FormData(form)
    const post = async function (url, request) {
        let res = await fetch(url, {
            method: "POST",
            // отправляем информацию на сервер
            body: request
        });
        // Возвращаем полученный ответ от сервера
        о том, что  информация отправлена .then 
        или нет .catch
        return await res.text();
    };

