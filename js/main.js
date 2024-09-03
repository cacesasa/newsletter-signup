const email = document.getElementById('email');
const form = document.getElementById('form');
const submitBtn = document.querySelector('.submit_btn');
const main = document.getElementById('main');
const success = document.getElementById('success');
const dismissBtn = document.getElementById('dismiss_btn');
const confirmEmail = document.getElementById('confirm_email');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();
    if (validEmail(email.value)) {
        success.classList.remove('hidden');
        main.classList.add('hidden');
        confirmEmail.innerHTML = email.value;
        email.value = '';
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    
}

const validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validateEmail = () => {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if(!validEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
}

email.addEventListener('input', () => {
    
    if (validEmail(email.value)) {
        submitBtn.style.backgroundImage = 'linear-gradient(135deg, hsl(15, 100%, 61%), hsl(364, 100%, 66%))';
        email.style.backgroundColor = 'hsl(0, 0%, 100%)';
        email.style.borderColor = 'hsla(231, 7%, 60%, 0.25)';
        email.style.color = 'hsl(234, 29%, 20%)';
        validateEmail();
    } else {
        submitBtn.style.backgroundImage = 'linear-gradient(135deg, hsl(234, 29%, 20%), hsl(234, 29%, 20%))';
        validateEmail();
        email.style.backgroundColor = 'hsla(4, 100%, 67%, 0.15)';
        email.style.borderColor = 'hsl(4, 100%, 67%)';
        email.style.color = 'hsl(4, 100%, 67%)';
    }

    console.log (email.value + ' ' + validEmail(email.value));
});

dismissBtn.addEventListener('click', () => {
    success.classList.add('hidden');
    main.classList.remove('hidden');
})