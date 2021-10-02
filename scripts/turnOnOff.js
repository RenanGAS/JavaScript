const machineImg = document.querySelector('.machineImg');
const machineBtn = document.querySelector('.machineBtn');
const txt = document.querySelector('.para');

machineBtn.addEventListener('click', updateBtn);

function updateBtn() {
    if (machineBtn.textContent === 'Ligar') {
        machineImg.setAttribute('src', '../images/Washing-Machine.png');
        machineImg.style.width = '80%';
        machineBtn.textContent = 'Desligar';
        txt.textContent = 'A máquina está ligada!';
    } else {
        machineImg.setAttribute('src', '../images/Washing-Machine-Stopped.png');
        machineImg.style.width = '60%';
        machineBtn.textContent = 'Ligar';
        txt.textContent = 'A máquina está desligada!';
    }
}