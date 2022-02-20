const select = () => {
    const select = document.querySelectorAll("form#select"),
        totalPrice = document.querySelector(".calc-price");

    let num,
        resSizes,
        resMaterial,
        resOptions;

  
        select.addEventListener("input", (e) => {
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
                } else {
                    num = (+resSizes) + (+resMaterial);
                    totalPrice.innerHTML = `${num} рублей`;
                }
            }
        })

    document.querySelector(".promocode").addEventListener("input", (e) => {
        if (e.target.value == "IWANTPOPART") {
            totalPrice.innerHTML = `${num * 0.3} рублей`;
        } else {
            totalPrice.innerHTML = `${num} рублей`;
        }
    });
};

export default select;