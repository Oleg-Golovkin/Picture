const filter = () => {
    const
        portfolioMenu = document.querySelector(".portfolioMenu-menu"),
        portfolioWrapper = document.querySelector(".portfolio-wrapper"),
        li = portfolioMenu.querySelectorAll("li"),
        portfolio = document.querySelector("#portfolio"),
        div = portfolioWrapper.querySelectorAll("div"),
        girl = portfolioWrapper.querySelectorAll(".girl"),
        lovers = portfolioWrapper.querySelectorAll(".lovers"),
        guy = portfolioWrapper.querySelectorAll(".guy"),
        chef = portfolioWrapper.querySelectorAll(".chef");



    const choice = () => {
        // let selectors = portfolioWrapper.querySelectorAll();
        portfolio.addEventListener("click", (e) => {
            li.forEach(li => {
                li.classList.remove("active");
            });
            div.forEach(li => {
                li.style.display = "none";
            });

            if (e.target.matches(".lovers")) {
                e.target.classList.add("active");
                lovers.forEach(selector => {
                    selector.style.display = "block";
                });
            }
            if (e.target.matches(".girl")) {
                e.target.classList.add("active");
                girl.forEach(selector => {
                    selector.style.display = "block";
                });
            }
            if (e.target.matches(".guy")) {
                e.target.classList.add("active");
                guy.forEach(selector => {
                    selector.style.display = "block";
                });
            }
            if (e.target.matches(".chef")) {
                e.target.classList.add("active");
                chef.forEach(selector => {
                    selector.style.display = "block";
                });
            }
        });
    };

    choice();
  
};

export default filter;