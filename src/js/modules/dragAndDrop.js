const dragAndDrop = () => {
    // Берем все инпуты
    const inputs = document.querySelectorAll('[name="upload"]');
// 1. Чтобы при всех событиях сбросить стандартное поведение браузера и 
// исключить всплытие события, перебираем все события и присваиваем
// исключение всплытия и отмену стандартного поведения браузера.
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(events => {
        inputs.forEach(input => {
            input.addEventListener(events, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });
    });

//2. Чтобы пользователь видел, куда наводить файл для его загрузки, при наведении
// на input появляется граница вышестоящего тэга, при сведении (прокашивает) с input граница исчезает

//2.1. Выделяем вышестоящий тэг при событии
    const showBorderElement = (selector) => {
        selector.closest('.file_upload').style.border = "1px red solid";
    };
//2.2. Снимаем это выделение при событии
    const hideBorderElement = (selector) => {
        selector.closest('.file_upload').style.border = "none";
    };

//2.3. При наведении на input (события 'dragenter', 'dragover') появляется граница
    ['dragenter', 'dragover'].forEach(events => {
        inputs.forEach(input => {
            input.addEventListener(events, () => showBorderElement(input));
        });
    });
//2.5. При снятии с наведения input (события 'dragleave', 'drop') Граница исчезает
    ['dragleave', 'drop'].forEach(events => {
        inputs.forEach(input => {
            input.addEventListener(events, () => hideBorderElement(input));
        });
    });

// 3. Эмуляция загрузки файла и обрезание его имени

// Поскольку не загружаем в input, а перетаскиваем файл в input, а браузер понимает только 
// загруку файлов, то перетаскивая эмулируем эту его загрузку.
// Для этого в input.files свойству input присваиваем аналогичное свойство из события e.dataTransfer.files.
// При обычной загузки (без перетаскивания) этого действия делать не нужно, поскольку
// там автоматически к свойству files присваивается соответствующее значение загружаемого файла
    inputs.forEach(input => {
        input.addEventListener("drop", (e) => {
            input.files = e.dataTransfer.files;
            //    1. input.files - Доступ к свойствам загружаемых файлов,
            //  которые содержатся в массиве
            //    2. .name доступ к имени фалайла, который
            //    содежится в объекте
            //    3. split(".") преобразуем это имя в массив
            // т.е. из bvz.pdf в ["bvz", "pdf"]
            let dot;
            // 4. Если имя файла больше 5
            if (input.files[0].name.split(".")[0].length > 5) {
                dot = "...";
            } else {
                dot = ".";
            }
            // 5. Обрезаем имя файла .substring(0, 6) и добаляем либо 
            // многоточие dot = "..."; или  dot = ".";  точку, + 
            // вторая часть имени, т.е. pdf
            let name = input.files[0].name.split(".")[0].substring(0, 6) + dot + input.files[0].name.split(".")[1];
            // 6. Присваиваем имя к блоку, который его выводит
            input.previousElementSibling.textContent = name;
        });
    });
};

export default dragAndDrop;