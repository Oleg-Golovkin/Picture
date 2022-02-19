import postForms from "../services/postForms";

const forms = () => {    
    const forms = document.querySelectorAll("form");    
    forms.forEach(form => {
        postForms(form);
        // console.log(form.closest(".popup-design"));
    });    
};

export default forms;