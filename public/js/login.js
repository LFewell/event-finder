console.log('hitting js file');
const loginForm = async (e) => {
    e.preventDefault();

    let email = document.querySelector('#email-login').value.trim();
    let password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        let res = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(res.ok){
            document.location.replace('/');
        } else {
            alert('Failed to log in!');
        }
    }
};

const signUpForm = async (event) => {
    event.preventDefault();

    let username = document.querySelector('#username-signup').value.trim();
    let email = document.querySelector('#email-signup').value.trim();
    let password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        let response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

document
    .querySelector('#login-form')
    .addEventListener('click', loginForm);

document
    .querySelector('#signup-form')
    .addEventListener('click', signUpForm);