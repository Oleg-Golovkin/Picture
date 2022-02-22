const calculator = () => {
    // const sizeBlock = document.querySelector("#size"),
    //     materialBlock = document.querySelector("#material"),
    //     optionsBlock = document.querySelector("#options"),
    //     promocodeBlock = document.querySelector(".promocode"),
    //     resultBlock = document.querySelector(".calc-price");

    // const finish = () => {
    //     let num = (Math.round(+sizeBlock.value)) + 
    //     (Math.round(+materialBlock.value)) + 
    //     (Math.round(+optionsBlock.value));

    //     if (sizeBlock.value == "" || materialBlock.value == "") {
    //         resultBlock.innerHTML = "Выберите размер и материал картины";
    //     } else if (promocodeBlock.value == "IWANTPOPART") {
    //         num =  Math.round(num * 0.3);
    //         resultBlock.innerHTML = `${num} рублей`;
    //     } else {            
    //         resultBlock.innerHTML = `${num} рублей`;
    //     }
    // };

    // sizeBlock.addEventListener("change", finish);
    // materialBlock.addEventListener("change", finish);
    // optionsBlock.addEventListener("change", finish);
    // promocodeBlock.addEventListener("input", finish);


    const totalPrice = document.querySelector(".calc-price"),
        promocodeBlock = document.querySelector(".promocode"),
        select = document.querySelector("#select");

    let num,
        resSizes,
        resMaterial,
        resOptions;

    function resualt(trigger, event) {
        trigger.addEventListener(event, (e) => {
            if (e.target && e.target.matches("#size")) {
                resSizes = e.target.value;
            }
            if (e.target && e.target.matches("#material")) {
                resMaterial = e.target.value;
            }
            if (e.target && e.target.matches("#options")) {
                    resOptions = e.target.value;               
            }      
            if (resOptions) {
                num = (+resSizes) + (+resMaterial) + (+resOptions);
            } else {
                num = (+resSizes) + (+resMaterial);
            }            
            if (!resSizes || !resMaterial) {
                totalPrice.innerHTML = "";
            } else if (promocodeBlock.value == "IWANTPOPART") {
                totalPrice.innerHTML = `${Math.round(num * 2)} рублей`;
            } else {
                totalPrice.innerHTML = `${num} рублей`;
            }
        });
    }

    resualt(select, "change");
    resualt(promocodeBlock, "input");
};

export default calculator;