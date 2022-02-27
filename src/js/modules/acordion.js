const acordion = () => {
    const accordionHeadings = document.querySelectorAll(".accordion-heading"),
        accordionBlocks = document.querySelectorAll(".accordion-block");

    // 1. Весь акордион закрыт
    function hideAccordionBlock() {
        accordionBlocks.forEach(accordionBlock => {
            accordionBlock.style.display = "none";
        });
    }
    hideAccordionBlock();
    // 2. Открытие по соответствующему индексу
    function showAccordionBlock(i) {
        accordionBlocks[i].style.display = "block";
        accordionBlocks[i].classList.add("animate__animated", "animate__fadeInDown");
    }

    accordionHeadings.forEach((accordionHeading, i) => {
        accordionHeading.addEventListener("click", (e) => {
            hideAccordionBlock();
            showAccordionBlock(i);
        });
    });
    // При нажатии на пустое пространство (!e.target.matches("span") все дочерние, кроме span)
    // аккордион схлопывается
    document.querySelector(".often-questions").addEventListener("click", (e) => {
        if (!e.target.matches("span")) {
            hideAccordionBlock();
        }
    });



};
export default acordion;