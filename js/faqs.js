// Só com o icon '+' e abre as janelas todas
document.querySelectorAll('.faqs__header').forEach((element) => {
    element.addEventListener('click', onFaqClick);
});

// abrindo as janelas e fechando 
function onFaqClick(event){
    const isOpen = document.querySelector('.faqs__element--open');
    const parent = event.target.closest('.faqs__element');
    
    if(isOpen && isOpen == parent) {
        isOpen.classList.remove('faqs__element--open');
        changeIcon(isOpen); 
    } else if (isOpen && isOpen != parent) {
        isOpen.classList.remove('faqs__element--open');
        changeIcon(isOpen); 

        parent.classList.toggle('faqs__element--open');
        changeIcon(parent);
    } else {
        parent.classList.toggle('faqs__element--open');
        changeIcon(parent);
    }
}

// mudança do icon '+' ou '-'
function changeIcon(element) { // como se fosse o parent
    if (element.classList.contains('faqs__element--open')) {
        element.querySelector('.faqs__icon').textContent = 'remove';
    } else {
        element.querySelector('.faqs__icon').textContent = 'add';
    }
}




