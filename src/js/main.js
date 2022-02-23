import modal from "./modules/modal";
import slider from "./modules/slider";
import moreStyles from "./modules/moreStyles";
import calculator from "./modules/calculator";
import postForms from "./services/postForms";

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modal();
    slider();
    moreStyles();
    calculator();
    postForms();
});