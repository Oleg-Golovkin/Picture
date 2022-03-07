const DragAndDrop = () => {
    const inputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(events => {
        inputs.forEach(input => {
            input.addEventListener(events, (e) => {
                e.preventDefault();
                e.stopPropagation();
            })
        });
    });

    const showBorderElement = (selector) => {
        selector.closest('.file_upload').style.border = "1px red solid";
    }

    const hideBorderElement = (selector) => {
        selector.closest('.file_upload').style.border = "none";
    }

    ['dragenter', 'dragover'].forEach(events => {
        inputs.forEach(input => {
            input.addEventListener(events, () => showBorderElement(input))
        });
    });

    // ['dragleave', 'drop'].forEach(events => {
    //     inputs.forEach(input => {
    //         input.addEventListener(events, () => hideBorderElement(input))
    //     });
    // });

    console.log("444");    



}

export default DragAndDrop