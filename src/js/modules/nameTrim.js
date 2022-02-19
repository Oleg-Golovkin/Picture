//____________Обрезаем имя загружаемого файла_____________//
function nameTrim() {
    document.querySelectorAll("[name=upload]").forEach(input => {        
        input.addEventListener("input", () => {
            //    1. input.files - Доступ к свойствам загружаемых файлов,
            //  которые содержатся в массиве
            //    2. .name доступ к имени фалайла, который
            //    содежится в объекте
            //    3. split(".") преобразуем это имя в массив
            // т.е. из bvz.pdf в ["bvz", "pdf"]
            // (input.files[0].name.split("."));
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
            console.log(name);
            input.previousElementSibling.textContent = name;
        });
    });
}

export default nameTrim;