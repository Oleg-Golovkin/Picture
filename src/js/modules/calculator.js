const calculator = () => {
    const sizeBlock = document.querySelector("#size"),
        materialBlock = document.querySelector("#material"),
        optionsBlock = document.querySelector("#options"),
        promocodeBlock = document.querySelector(".promocode"),
        resultBlock = document.querySelector(".calc-price");
    // 1. Создаем функцию по подсчету.
    const finish = () => {
        // 1.1. Формула для подсчета. Использовал
        // только одну переменную, получающую итоговый 
        // результат
        let num = (Math.round(+sizeBlock.value)) + 
        (Math.round(+materialBlock.value)) + 
        (Math.round(+optionsBlock.value));
        //1.2. Если любой из select не задействован
        if (sizeBlock.value == "" || materialBlock.value == "") {
            resultBlock.innerHTML = "Выберите размер и материал картины";
        // 1.3. Если введен промокод. То полученный результат
        // в num  уменьшается
        } else if (promocodeBlock.value == "IWANTPOPART") {
            num =  Math.round(num * 0.3);
            resultBlock.innerHTML = `${num} рублей`;
        // 1.4. Во всех остальных случаях:
        // - не выбрано два и более значений
        // - не введен промокод
        } else {            
            resultBlock.innerHTML = `${num} рублей`;
        }
    };
    // 2. Подставляем функцию по подсчету в каждое событие 
    // в виде тела события.
    // Чтобы она впитывала в себя необходимые для подсчета 
    // значения
    sizeBlock.addEventListener("change", finish);
    materialBlock.addEventListener("change", finish);
    optionsBlock.addEventListener("change", finish);
    promocodeBlock.addEventListener("input", finish);

};

export default calculator;