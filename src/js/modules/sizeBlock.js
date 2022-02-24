const sizeBlock = () => {
    const sizeWrapper = document.querySelector(".sizes-wrapper"),
        img = sizeWrapper.querySelectorAll("img"),
        p = sizeWrapper.querySelectorAll("p")

    const showImg = () => {
        sizeWrapper.addEventListener("mouseover", (e) => {
            if (e.target && e.target.matches("img")) {
                e.target.src = "assets/img/sizes-1-1.png";
                p.forEach(p => {
                    p.style.display = "none";
                });               
            }
        });
    };
    showImg();
};
export default sizeBlock;