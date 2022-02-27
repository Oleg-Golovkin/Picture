const sizeBlock = () => {
    const sizesBlocks = document.querySelectorAll(".sizes-block");


    const showImg = (target, sizesBlock) => {
        if (target && target.matches("img")) {
            let src = target.src
            target.src = src.slice(0, -4) + "-1.png"
            const p = sizesBlock.querySelectorAll("p");
            p.forEach(p => {
                p.style.display = "none";
            });
        }
    };

    const hideImg = (target, sizesBlock) => {
        if (target && target.matches("img")) {
            let src = target.src
            target.src = src.slice(0, -6) + ".png"
            const p = sizesBlock.querySelectorAll("p");
            p.forEach(p => {
                p.style.display = "block";
            });
        }
    };
    
    sizesBlocks.forEach(sizesBlock=> {
        sizesBlock.addEventListener("mouseover", (e) => {
            showImg(e.target, sizesBlock);
        });
    })
    
};
export default sizeBlock;