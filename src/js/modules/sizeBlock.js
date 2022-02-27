const sizeBlock = () => {
    const sizesBlocks = document.querySelectorAll(".sizes-block");


    const showImg = (sizesBlock) => {
        const img = sizesBlock.querySelector("img");
        console.log(img.src);
        img.src = img.src.slice(0, -4) + "-1.png";
        const p = sizesBlock.querySelectorAll('p:not(.sizes-hit)');
        p.forEach(p => {
            p.style.display = "none";
        });
    };

    const hideImg = (sizesBlock) => {
        let img = sizesBlock.querySelector("img");
        img.src = img.src.slice(0, -6) + ".png";
        const p = sizesBlock.querySelectorAll('p:not(.sizes-hit)');
        p.forEach(p => {
            p.style.display = "block";
        });
    };

    sizesBlocks.forEach(sizesBlock => {
        sizesBlock.addEventListener("mouseover", (e) => {
            showImg(sizesBlock);
        });
        sizesBlock.addEventListener("mouseout", (e) => {
            hideImg(sizesBlock);
        });
    });

};
export default sizeBlock;