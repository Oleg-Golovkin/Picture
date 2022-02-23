import modal from "./modules/modal";
import slider from "./modules/slider";
import moreStyles from "./modules/moreStyles";
import calculator from "./modules/calculator";
import postForms from "./services/postForms";
import filter from "./modules/filter";

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modal();
    slider();
    moreStyles();
    calculator();
    postForms();
    filter();
});