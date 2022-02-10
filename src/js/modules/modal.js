// import windowOptions from "./windowOptions";

const modal = () => {
    let noOpoenWinowTimer = true;
    // Верстка такова, что скрываем и показываем
    // фон модального окна (его подложку)    
    //-------------------1. Функции---------------------------------------//
    // 1.1. Скрытие, показ модального окна 
    function actionModal({
        /* кнопка, открываюая мод. окно */
        selectorButton,
        /* Подложка (фон) конкретного модального окна */
        selectorModal,
        /* Подложки (фон) всех модальных окон */
        // Чтобы закрывать все окна на случай вызова модального
        // окна через другое модальное окно, а не через верстку.
        // В обратном случае два открытых окна будут мешаться
        // друг другу.
        selectorModals,
        selectorModalContent,
        /* кнопка, скрывающая фон модального окна
        вместе с модальным окном */
        selectorClose,
        /* класс, присваивающий display: block; */
        styleShow,
        dataModals = true,
        dataValidation = false,
s    }) {

        const button = document.querySelectorAll(selectorButton),
            modal = document.querySelector(selectorModal),
            modals = document.querySelectorAll(selectorModals),
            modalContent = document.querySelector(selectorModalContent),
            close = document.querySelectorAll(selectorClose);
        // Подключил функцию по наполнению объекта. Чтобы валидировать
        // соответствующие формы
        // let setWindowOptions = {};
        // windowOptions(setWindowOptions);

        // Показывает и скрывает конкретное модальное окно
        function closeModal() {
            modal.style.display = `none`;
            // Окно не прокручивается
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }
        // Показывает и скрывает все модальные окна
        // Для тех случаев, когда вызов модальных окон из 
        // другого модального окна
        function closeModalAll() {
            modals.forEach(item => {
                item.style.display = `none`;
            });
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }

        function showModal() {
            // Все окна закрываются
            closeModalAll();
            // Открывается только заданное модальное окно
            modal.style.display = `${styleShow}`;
            // Окно прокручивается
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${showWidthScroll()}px`;    
            noOpoenWinowTimer = false;

        }

        // Валидация на заполненность форм отдельных модальных
        // окон
        // function validationWindow() {
        //     if (modal.matches('.popup_calc_profile') &&
        //         setWindowOptions != {} &&
        //         setWindowOptions.width != '' &&
        //         setWindowOptions.height != '' &&
        //         setWindowOptions.form > 0) {
        //         return true;
        //     }

        //     if (modal.matches('.popup_calc_end') &&
        //         setWindowOptions != {} &&
        //         setWindowOptions.view_type != '' &&
        //         (setWindowOptions.cold == true ||
        //             setWindowOptions.warm == true)) {
        //         return true;
        //     }
        // }


        // Размер смещения старницы из-за бегунка прокрутки
        function showWidthScroll() {
            // 1. Создаем блок
            let div = document.createElement("div");
            document.body.append(div);
            // 2. Присваиваем стили, чтобы:
            // был
            div.style.width = "50px";
            div.style.height = "50px";
            // виден скролл
            div.style.overflowY = "scroll";
            // скрываем из верстки
            div.style.visibility = "hidden";
            // 3. Получаем ширину скрола
            let widthScroll = div.offsetWidth - div.clientWidth;
            // 4. удаляем элемент со страницы
            div.remove();
            // 5. В итоге в функции будет значение ширины бегунка прокрутки
            // странцы. Это значение подставляем в виде марджена, когда
            // появляется блок, чтобы странца не прыгала
            return widthScroll;
        }

        // function clearInputs(inputSelector) {
        //     const numInputs = document.querySelectorAll(inputSelector);
        //     numInputs.forEach(numInput => {
        //         numInput.value = "";
        //     });
        // }

        // function showMessageError() {
        //     let statusMessage = document.createElement('div');
        //     statusMessage.classList.add('status');
        //     statusMessage.textContent = "Выбраны не все параметры";
        //     modalContent.appendChild(statusMessage);
        //     setTimeout(function () {
        //         statusMessage.remove();
        //     }, 2000);
        // }

        // Событие все кнопоки
        button.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                /*  if (e.target && dataValidation) {
                     if (e.target && validationWindow()) {
                         showModal();
                         clearInputs('#width');
                         clearInputs('#height');
                     } else if (modal.matches('.popup_calc_profile')) {
                         showMessageError();
                     }
                     if (e.target && validationWindow()) {
                         showModal();
                     } else if (modal.matches('.popup_calc_end')) {
                         showMessageError();
                     }
                 } else  */
                if (e.target && !dataValidation) {
                    // Все окна закрываются
                    showModal();
                    console.log(noOpoenWinowTimer);
                }
            });
        });

        // Клик на крестики - окно исчезает
        close.forEach(close => {
            close.addEventListener("click", (e) => {
                // Все окна закрываются
                closeModal();
                document.body.style.overflow = "";
            });
        });

        // Клик на подложку - окно исчезает
        modal.addEventListener("click", (e) => {
            // Если кликаем только на подложку,
            // а не на само модальное окно
            if (e.target === modal && dataModals) {
                // Все окна закрываются
                closeModal();
                document.body.style.overflow = "";
            }
        });

        // Закрытие окна на клавишу 
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains(selectorShow)) {
                closeModal();
                document.body.style.overflow = "";
            }
        });
    }

    //1.2.Через время открываются не все, а конкретное окно

    function timerShowModal({
        selectorModal,
        time,
        styleShow,        
    }) {
        setTimeout(function () {
            console.log(noOpoenWinowTimer);
            if (noOpoenWinowTimer) {
                document.querySelector(selectorModal).style.display = `${styleShow}`;
                console.log(noOpoenWinowTimer);
                console.log('1');
            }
        }, time);
    }




    //-------------------2. Вызовы функций---------------------------------------//


    // 2.1. Заказать дизайн
    actionModal({
        /* кнопка, открываюая мод. окно */
        selectorButton: ".button-design",
        /* Подложка (фон) модального окна */
        selectorModal: '.popup-design',
        /* кнопка, закрывающая модальное окно */
        selectorClose: '.popup-close',
        /* класс (без точки), присваивающий display: block; */
        styleShow: 'block',
    });
    // 2.2. Подобнее об услуге
    actionModal({
        /* кнопка, открываюая мод. окно */
        selectorButton: ".button-consultation",
        /* Подложка (фон) модального окна */
        selectorModal: '.popup-consultation',
        /* кнопка, закрывающая модальное окно */
        selectorClose: '.popup-close',
        /* класс (без точки), присваивающий display: block; */
        styleShow: 'block',
    });

    
    timerShowModal({
        selectorModal: ".popup-consultation",
        time: 2000,
        styleShow: 'block'
    });

};

export default modal;