const calculator = () => {
    // const sizeBlock = document.querySelector("#size"),
    //     materialBlock = document.querySelector("#material"),
    //     optionsBlock = document.querySelector("#options"),
    //     promocodeBlock = document.querySelector(".promocode"),
    //     resultBlock = document.querySelector(".calc-price");

    // function calculator(targetSelector) {
    //     let num = (+sizeBlock) + (+materialBlock) + (+optionsBlock)


    //     // if (e.target && e.target.matches("#size")) {
    //     //     resSizes = e.target.value;
    //     // }
    //     // if (e.target && e.target.matches("#material")) {
    //     //     resMaterial = e.target.value;
    //     // }
    //     // if (e.target && e.target.matches("#options")) {
    //     //     resOptions = e.target.value;
    //     // }

    //     if (sizeBlock == "" || materialBlock.value == "") {
    //         resultBlock.innerHTML = "Выберите размер и материал картины";
    //     } else if (promocodeBlock.value == "IWANTPOPART") {
    //         resultBlock.innerHTML = `${num * 0.3} рублей`;
    //     } else {            
    //         resultBlock.innerHTML = `${num} рублей`;
    //     }

    // }


    const select = document.querySelector("form#select"),
        totalPrice = document.querySelector(".calc-price");

    let num,
        resSizes,
        resMaterial,
        resOptions;


    select.addEventListener("change", (e) => {
        if (e.target && e.target.matches("#size")) {
            resSizes = e.target.value;
        }
        if (e.target && e.target.matches("#material")) {
            resMaterial = e.target.value;
        }
        if (e.target && e.target.matches("#options")) {
            resOptions = e.target.value;
        }

        if (!resSizes || !resMaterial) {
            totalPrice.innerHTML = "";
        } else {
            if (resSizes && resMaterial && resOptions) {
                num = (+resSizes) + (+resMaterial) + (+resOptions);
                totalPrice.innerHTML = `${num} рублей`;
                return num
            } else {
                num = (+resSizes) + (+resMaterial);
                totalPrice.innerHTML = `${num} рублей`;
                return num
            }
        }
    });

    const promocode = document.querySelector(".promocode");

    promocode.addEventListener("input", (e) => {
        if (e.target.value == "IWANTPOPART") {
            console.log("fsdf");
            totalPrice.innerHTML = `${num * 0.3} рублей`;
            return num
        } else {
            totalPrice.innerHTML = `${num} рублей`;
        }
    });



};

export default calculator;