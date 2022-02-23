const filter = () => {
    const
        portfolioMenu = document.querySelector(".portfolioMenu-menu"),
        portfolioWrapper = document.querySelector(".portfolio-wrapper"),
        li = portfolioMenu.querySelectorAll("li"),
        portfolio = document.querySelector("#portfolio"),
        div = portfolioWrapper.querySelectorAll("div");
    const choice = () => {
        portfolio.addEventListener("click", (e) => {
            li.forEach(li => {
                li.classList.remove("active");
            });
            div.forEach(li => {
                li.style.display = "none";
            });

            if (e.target && e.target.matches("li")) {
                e.target.classList.add("active");
                console.log(e.target.matches(".girl"));
                // div.forEach(li => {
               
                // });
            }

        });
    };

    choice();


}

export default filter;