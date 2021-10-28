// Bringing in the elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    //accessing class of form-control through input.parentElement
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    
    //Creating a new element for the 'small' element
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check if email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
       if(input.value.trim() === '') {
        //Displaying input id in error message using template literal
           showError(input, `${getFieldName(input)} is required`);
       } else {
           showSuccess(input);
       }
    });
}

//Check input length 
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}
        characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} cannot exceed ${max}
        characters`);
    } else {
        showSuccess(input);
    }
}

//Get Field Name
function getFieldName(input) {
    // Using charAt(0) to capitalize first letter and .slice to concatonate the rest of word
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    //Calling checkRequired on array of inputs
checkRequired([username, email, password, password2]);
checkLength(username, 3, 15);
checkLength(password, 6, 25);
checkEmail(email);
});