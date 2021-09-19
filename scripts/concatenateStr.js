const pressBtn = document.querySelector('#pressBtn');
const pressImg = document.querySelector('#pressImg');

pressBtn.addEventListener('click', buttonPressed);

function buttonPressed() {
    if (pressBtn.textContent === 'Pressione o botão') {
        let part2 = ' PRESSIONOU O';
        pressBtn.textContent = 'VOCÊ' + part2 + ' BOTÃO!';
        pressImg.setAttribute('src', 'images/naruto-joinha.jpg');
    } else {
        pressBtn.textContent = 'Pressione o botão';
        pressImg.setAttribute('src', 'images/naruto.jpg');
    }
}