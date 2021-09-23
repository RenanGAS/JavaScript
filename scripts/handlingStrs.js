const calcBtn = document.querySelector('#calcBtn');
const gradeInput = document.querySelector('#nota');
const testInput = document.querySelector('#prova');
const msgImg = document.querySelector('#msgImg');

calcBtn.addEventListener('click', calcApprobation);

function calcApprobation() {
    let grade = Number(gradeInput.value);
    let test = Number(testInput.value);
    let average = (70 * test) / 100;

    let msg = document.createElement('p');
    msg.textContent = `${grade >= average ? 'Parabéns, você passou de ano' : 'Não foi dessa vez, mas continue firme'}! 
    A relação foi de ${grade}/${test} (${Math.round(grade / test) * 100}%)`;
    msg.style.paddingTop = '3rem';

    msgImg.setAttribute('src', `${grade >= average ? 'images/naruto-joinha.jpg' : 'images/naruto-triste.jpg'}`);

    msgImg.insertAdjacentElement('beforebegin', msg);
}