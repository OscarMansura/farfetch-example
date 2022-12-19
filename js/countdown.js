const targetDate = new Date(2022, 9, 12, 21, 30, 0);
const tDateInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date();
    const diff = Math.abs(targetDate - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days < 1) {
        document.querySelector('.countdown').classList.add('countdown--final');
        document.querySelector('.countdown span').textContent = `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    } else {
        document.querySelector('.countdown span').textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }
    
}

