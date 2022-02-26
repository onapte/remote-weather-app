document.addEventListener('DOMContentLoaded', function() {
    //validateForm();
})

function validateForm(event) {
    let inputFields = document.querySelectorAll('.login-input');
    let loginForm = document.querySelector('.login-form');
    loginForm.onsubmit = function (e) {
        let counter = 0;
        inputFields.forEach((inputField) => {
            if (inputField.value === "") {
                inputField.style.border = "solid 2px red";
            }
        })
        //e.preventDefault();
    }
    
}