// get favourites buttons
const favouritesButtons = document.querySelectorAll('.highlights__favourite');

// Alert example
//alert('hello');

// Prompt example
//const result = prompt('Are you fine?');
//console.log(result);

// add click event to each favourite button
favouritesButtons.forEach((element) => {
    element.addEventListener('click', toggleFavourite);
});

// add logic to favourite toggle and count
function toggleFavourite(event) {
    const parent = event.target.closest('.highlights__favourite');
    parent.classList.toggle('highlights__favourite--selected');

    updateFavouriteCount();
}

function updateFavouriteCount() {
    const count = document.querySelectorAll('.highlights__favourite--selected').length;
    countText = count;
    if (count <= 0) {
        countText = '';
    } else if (count >= 100) {
        countText = '+99';
    }

    document.querySelector('.header__counter').textContent = countText;
    localStorage.setItem('favourites_count', countText);
}

if (localStorage.getItem('favourites_count')) {
    document.querySelector('.header__counter').textContent = localStorage.getItem('favourites_count');
}


function onScroll() {
    const top = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const diff = documentHeight - windowHeight;
    const per = top * 100 / diff;
    

    // minify / unminify header
    const header = document.querySelector('.header');

    // ternary
    //(top > 50) ? header.classList.add('header--min') : header.classList.remove('header--min');

    // if / else
    // if (top > 50) {
    //     header.classList.add('header--min');
    // } else {
    //     header.classList.remove('header--min');
    // }

    header.classList.toggle('header--min', top > 50);


    // show / hide scroll to top link
    const scrollToTop = document.querySelector('.back-to-top');
    scrollToTop.classList.toggle('back-to-top--show', per > 75);

}

// minify header on scroll
document.addEventListener('scroll', onScroll); // anonymous functions

// show contact form
document.querySelector('[data-contact-form]').addEventListener('click', showContactForm);

function onKeyUp(event) {
    if(event.key === 'Escape') {
        hideContactForm();
    }
}

function onOverlayClick(event) {
    if (event.target.classList.contains('overlay')) {
        hideContactForm();
    }
}

function handleOverlayClose(event) {
    if(event.key === 'Escape' || event.target.classList.contains('overlay')) {
        hideContactForm();
    }
}

function showContactForm() {
    //document.querySelector('.overlay__close').addEventListener('click', hideContactForm);
    document.addEventListener('keyup', handleOverlayClose);
    document.addEventListener('click', handleOverlayClose);
    document.querySelector('.overlay').classList.add('overlay--show');
}

function hideContactForm() {
    //document.querySelector('.overlay__close').removeEventListener('click', hideContactForm);
    document.removeEventListener('keyup', handleOverlayClose);
    document.removeEventListener('click', handleOverlayClose);
    document.querySelector('.overlay').classList.remove('overlay--show');
}
