document.querySelector('.contact-form').addEventListener('submit', onContactSubmit);

function onContactSubmit(event) {
    event.preventDefault();

    const name = document.querySelector('[name="cf_name"]');
    const email = document.querySelector('[name="cf_email"]');
    const subject = document.querySelector('[name="cf_subject"]');
    const message = document.querySelector('[name="cf_message"]');

    const isEmail = /\S+@\S+\.\S+/.test(email.value);
    
    //add / remove error class
    name.classList.toggle('contact-form__input--invalid', !name.value.length);
    email.classList.toggle('contact-form__input--invalid', !isEmail);
    subject.classList.toggle('contact-form__input--invalid', !subject.value.length);
    message.classList.toggle('contact-form__input--invalid', !message.value.length);

    const error = document.querySelector('.contact-form__input--invalid');

    if (!error) {
        console.log('API CALL');
        // TODO: Fetch API example
    } else {
        error.focus();
    }
}
