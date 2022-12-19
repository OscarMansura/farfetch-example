document.querySelector('.subscribe-newsletter').addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    //get input email value
    const email = document.querySelector('.subscribe-newsletter__email');

    //validate regex email
    const isEmail = /\S+@\S+\.\S+/.test(email.value);
    
    //add / remove error class
    email.classList.toggle('subscribe-newsletter__email--invalid', !isEmail);
    //email.classList.toggle('subscribe-newsletter__email--invalid', isEmail === false);

    // if (isEmail) {
    //     email.classList.remove('subscribe-newsletter__email--invalid');
    // } else {
    //     email.classList.add('subscribe-newsletter__email--invalid');
    // }

    if (isEmail) {
        console.log('API CALL');
        // TODO: Fetch API example
    }
}
