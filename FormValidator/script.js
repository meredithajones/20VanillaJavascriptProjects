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

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

});