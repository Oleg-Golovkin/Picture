const accordion = () => {
const btn = document.querySelector(".button-transparent"),
styles2 = document.querySelectorAll(".styles-2 ");

styles2.forEach(item => {
    item.classList.add("animate__animated", "animate__fadeInDown");
});

btn.addEventListener("click", ()=> {
    styles2.forEach(item => {
        item.style.display = "block";
        item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
        item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
        
    });
});


};


export default accordion;