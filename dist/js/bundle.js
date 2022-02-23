/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calculator = () => {
  const sizeBlock = document.querySelector("#size"),
        materialBlock = document.querySelector("#material"),
        optionsBlock = document.querySelector("#options"),
        promocodeBlock = document.querySelector(".promocode"),
        resultBlock = document.querySelector(".calc-price"); // 1. Создаем функцию по подсчету.

  const finish = () => {
    // 1.1. Формула для подсчета. Использовал
    // только одну переменную, получающую итоговый 
    // результат
    let num = Math.round(+sizeBlock.value) + Math.round(+materialBlock.value) + Math.round(+optionsBlock.value); //1.2. Если любой из select не задействован

    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.innerHTML = "Выберите размер и материал картины"; // 1.3. Если введен промокод. То полученный результат
      // в num  уменьшается
    } else if (promocodeBlock.value == "IWANTPOPART") {
      num = Math.round(num * 0.3);
      resultBlock.innerHTML = `${num} рублей`; // 1.4. Во всех остальных случаях:
      // - не выбрано два и более значений
      // - не введен промокод
    } else {
      resultBlock.innerHTML = `${num} рублей`;
    }
  }; // 2. Подставляем функцию по подсчету в каждое событие 
  // в виде тела события.
  // Чтобы она впитывала в себя необходимые для подсчета 
  // значения


  sizeBlock.addEventListener("change", finish);
  materialBlock.addEventListener("change", finish);
  optionsBlock.addEventListener("change", finish);
  promocodeBlock.addEventListener("input", finish);
};

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_postForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/postForms */ "./src/js/services/postForms.js");


const forms = () => {
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    (0,_services_postForms__WEBPACK_IMPORTED_MODULE_0__["default"])(form); // console.log(form.closest(".popup-design"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import windowOptions from "./windowOptions";
const modal = () => {
  let avtoOpoenModal = true; // Верстка такова, что скрываем и показываем
  // фон модального окна (его подложку)    
  //-------------------1. Функции---------------------------------------//
  // 1.1. Скрытие, показ модального окна 

  function actionModal(_ref) {
    let {
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
      removeButton = false
    } = _ref;
    const button = document.querySelectorAll(selectorButton),
          modal = document.querySelector(selectorModal),
          modals = document.querySelectorAll(selectorModals),
          modalContent = document.querySelector(selectorModalContent),
          close = document.querySelectorAll(selectorClose); // Подключил функцию по наполнению объекта. Чтобы валидировать
    // соответствующие формы
    // let setWindowOptions = {};
    // windowOptions(setWindowOptions);
    // Показывает и скрывает конкретное модальное окно

    function closeModal() {
      modal.style.display = `none`; // Окно не прокручивается

      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    } // Показывает и скрывает все модальные окна
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
      closeModalAll(); // Открывается только заданное модальное окно

      modal.style.display = `${styleShow}`; // Окно прокручивается

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${showWidthScroll()}px`;
      avtoOpoenModal = false;
    } // Валидация на заполненность форм отдельных модальных
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
      document.body.append(div); // 2. Присваиваем стили, чтобы:
      // был

      div.style.width = "50px";
      div.style.height = "50px"; // виден скролл

      div.style.overflowY = "scroll"; // скрываем из верстки

      div.style.visibility = "hidden"; // 3. Получаем ширину скрола

      let widthScroll = div.offsetWidth - div.clientWidth; // 4. удаляем элемент со страницы

      div.remove(); // 5. В итоге в функции будет значение ширины бегунка прокрутки
      // странцы. Это значение подставляем в виде марджена, когда
      // появляется блок, чтобы странца не прыгала

      return widthScroll;
    } // function clearInputs(inputSelector) {
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
      button.addEventListener("click", e => {
        e.preventDefault();

        if (removeButton) {
          button.remove();
        }

        if (e.target) {
          // Все окна закрываются
          showModal();
        }
      });
    }); // Клик на крестики - окно исчезает

    close.forEach(close => {
      close.addEventListener("click", e => {
        // Все окна закрываются
        closeModal();
        document.body.style.overflow = "";
      });
    }); // Клик на подложку - окно исчезает

    modal.addEventListener("click", e => {
      // Если кликаем только на подложку,
      // а не на само модальное окно
      if (e.target === modal) {
        // Все окна закрываются
        closeModal();
        document.body.style.overflow = "";
      }
    }); // Закрытие окна на клавишу 

    document.addEventListener('keydown', e => {
      if (e.code === "Escape" && window.getComputedStyle(modal).display == "block") {
        closeModal();
        document.body.style.overflow = "";
      }
    });
  } //1.2.Через время открываются не все, а конкретное окно


  function timerShowModal(_ref2) {
    let {
      selectorModal,
      time,
      styleShow
    } = _ref2;
    setTimeout(function () {
      if (avtoOpoenModal) {
        document.querySelector(selectorModal).style.display = `${styleShow}`;
      }
    }, time);
  }

  function showModalscroll(_ref3) {
    let {
      selectorButton
    } = _ref3;
    window.addEventListener("scroll", () => {
      // 1. Если ранее не открывал окно. В обработчике открытия
      // окна поставил эту переменную со значением false
      if (avtoOpoenModal) {
        // 2. Для поддержки старых браузеров, берем любое из максимальных значений
        // Math.max всей высоты страницы (document.documentElement.scrollHeight или
        //     document.body.scrollHeight)
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // 3. Если вся всота страницы scrollHeight меньше или равна прокрученной части .scrollTop + 
        // высоты текущего окна .clientHeigh

        if (scrollHeight <= document.documentElement.clientHeight + document.documentElement.scrollTop) {
          //    4.  Повторно передаю ранее присовенный клик .click(); к кнопке вызова окна. 
          // Т.е. если ранее присвоили клик, его еще раз можно вызвать
          document.querySelector(selectorButton).click();
        }
      }
    });
  } //-------------------2. Вызовы функций---------------------------------------//
  // 2.1. Модальное окно заказать дизайн


  actionModal({
    /* кнопка, открываюая мод. окно */
    selectorButton: ".button-design",

    /* Подложка (фон) модального окна */
    selectorModal: '.popup-design',

    /* кнопка, закрывающая модальное окно */
    selectorClose: '.popup-close',

    /* класс (без точки), присваивающий display: block; */
    styleShow: 'block'
  }); // 2.2. Модальное окно подробнее об услуге

  actionModal({
    /* кнопка, открываюая мод. окно */
    selectorButton: ".button-consultation",

    /* Подложка (фон) модального окна */
    selectorModal: '.popup-consultation',

    /* кнопка, закрывающая модальное окно */
    selectorClose: '.popup-close',

    /* класс (без точки), присваивающий display: block; */
    styleShow: 'block'
  }); // 2.3. Модальное окно с подарком

  actionModal({
    /* кнопка, открываюая мод. окно */
    selectorButton: ".fixed-gift",

    /* Подложка (фон) модального окна */
    selectorModal: '.popup-gift',

    /* кнопка, закрывающая модальное окно */
    selectorClose: '.popup-close',

    /* класс (без точки), присваивающий display: block; */
    styleShow: 'block',
    removeButton: true
  }); // 2.4 Таймер показа модального окна
  // timerShowModal({
  //     selectorModal: ".popup-consultation",
  //     time: 2000,
  //     styleShow: 'block'
  // });
  // 2.5. При листании страницы до конца модальное окано

  showModalscroll({
    selectorButton: '.fixed-gift'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/moreStyles.js":
/*!**************************************!*\
  !*** ./src/js/modules/moreStyles.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const moreStyles = () => {
  const btn = document.querySelector(".button-transparent"),
        row = document.querySelector("#row");
  btn.addEventListener("click", e => {
    // 1.3. Настраиваем механизм отправки данных на сервер
    // async - чтобы функция выполнилась после получения данных
    // с сервера.
    // Вместо url в пункте 1.2. подставится адрес
    // Вместо request в пункте 1.2. подставится то, что
    // будем отправлять на сервер - new FormData(form)
    const post = async function (url) {
      let res = await fetch(url); // Возвращаем полученный ответ от сервера о том, что
      // информация отправлена .then или нет .catch

      return await res.json();
    };

    post("../assets/db.json") // 1.4.  Можем проверить, ушли ли инф. на сервер.
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
    }).catch(() => {
      console.log("нет");
    }).finally(() => {
      e.target.remove();
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (moreStyles);

/***/ }),

/***/ "./src/js/modules/nameTrim.js":
/*!************************************!*\
  !*** ./src/js/modules/nameTrim.js ***!
  \************************************/
/***/ (function() {

//____________Обрезаем имя загружаемого файла_____________//
document.querySelectorAll("[name=upload]").forEach(input => {
  input.addEventListener("input", () => {
    //    1. input.files - Доступ к свойствам загружаемых файлов,
    //  которые содержатся в массиве
    //    2. .name доступ к имени фалайла, который
    //    содежится в объекте
    //    3. split(".") преобразуем это имя в массив
    // т.е. из bvz.pdf в ["bvz", "pdf"]
    // (input.files[0].name.split("."));
    let dot; // 4. Если имя файла больше 5

    if (input.files[0].name.split(".")[0].length > 5) {
      dot = "...";
    } else {
      dot = ".";
    } // 5. Обрезаем имя файла .substring(0, 6) и добаляем либо 
    // многоточие dot = "..."; или  dot = ".";  точку, + 
    // вторая часть имени, т.е. pdf


    let name = input.files[0].name.split(".")[0].substring(0, 6) + dot + input.files[0].name.split(".")[1]; // 6. Присваиваем имя к блоку, который его выводит

    console.log(name);
    input.previousElementSibling.textContent = name;
  });
});

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = () => {
  function sliders(_ref) {
    let {
      slideSelector,
      nextSlideSelector,
      prevSlideSelector,
      horizontally
    } = _ref;
    const slide = document.querySelectorAll(slideSelector),
          nextSlide = document.querySelector(nextSlideSelector),
          prevSlide = document.querySelector(prevSlideSelector);
    let indexSlide = 1;
    showSlide(indexSlide); // 3. showSlide запускается с цифрой 2 (то, 
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
      } // 3.1 При достижении ниже
      // перого слайда


      if (n < 1) {
        indexSlide = slide.length;
      } // 3.2 Удаляем все слайды


      slide.forEach(item => {
        item.style.display = "none";
        item.classList.add("animate__animated");
      }); // 3.3. Показываем слайд с соответствующим 
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

    if (!horizontally) {
      setInterval(function () {
        showSlide(indexSlide += 1);
        slide[indexSlide - 1].classList.add("animate__backInUp");
      }, 2000);
    }
  } // Слайдер с отзывами


  sliders({
    slideSelector: ".feedback-slider-item",
    nextSlideSelector: ".main-next-btn",
    prevSlideSelector: ".main-prev-btn",
    horizontally: true
  }); // Слайдер портрет на холсте

  sliders({
    slideSelector: ".main-slider-item",
    horizontally: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/services/postForms.js":
/*!**************************************!*\
  !*** ./src/js/services/postForms.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_nameTrim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/nameTrim */ "./src/js/modules/nameTrim.js");
/* harmony import */ var _modules_nameTrim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_nameTrim__WEBPACK_IMPORTED_MODULE_0__);
// Не обязательный блок. Обрезаем имя загружаемого файла.


function postForms(form) {
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  }; // 1. На каждую форму вешаем обработчик события.
  // с событием submit

  form.addEventListener("submit", e => {
    e.preventDefault(); // НЕ ОБЯЗАТЕЛЬНЫЙ БЛОК

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    form.appendChild(statusMessage); // 1.1. Информация, введенная форму, собирается
    // в специальном объекте new FormData(form)

    const formData = new FormData(form); // Адресс сервера в зависимости от вида изображения

    let path;

    if (form.closest(".popup-design")) {
      path = "assets/picture.php";
    } else {
      path = "assets/server.php";
    } // 1.2. Отправляем данные на сервер. Выполняется функция
    // post, тело которой описано в пункте п. 1.3  


    post(path, formData) // 1.4.  Можем проверить, ушли ли инф. на сервер.
    // Через Promise
    // При положительном варианте событий при повторном
    // обращении к .then можем выполнять действия
    .then(data => {
      console.log(data);
      statusMessage.textContent = message.success;
    }).catch(() => {
      statusMessage.textContent = message.failure;
    }).finally(() => {
      form.reset();
      setTimeout(function () {
        statusMessage.remove();
        document.querySelectorAll('[data-modal]').forEach(modal => {
          modal.classList.add("animate__animated", "animate__bounceOut");
          setTimeout(function () {
            modal.classList.remove("animate__animated", "animate__bounceOut");
            modal.style.display = "none";
          }, 1000);
        });
        document.body.style.overflow = "";
      }, 2000);
    });
  }); // 1.3. Настраиваем механизм отправки данных на сервер
  // async - чтобы функция выполнилась после получения данных
  // с сервера.
  // Вместо url в пункте 1.2. подставится адрес
  // Вместо request в пункте 1.2. подставится то, что
  // будем отправлять на сервер - new FormData(form)

  const post = async function (url, request) {
    let res = await fetch(url, {
      method: "POST",
      // отправляем информацию на сервер
      body: request
    }); // Возвращаем полученный ответ от сервера о том, что
    // информация отправлена .then или нет .catch

    return await res.text();
  };
}

/* harmony default export */ __webpack_exports__["default"] = (postForms);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_moreStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/moreStyles */ "./src/js/modules/moreStyles.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");





document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_moreStyles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map