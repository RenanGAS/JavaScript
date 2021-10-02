const buttonP = document.querySelector('#buttonP');
const headingT = document.querySelector('#headingT');
const imageV = document.querySelector('#imageV');

buttonP.onclick = function(){
    let name = prompt('Digite o seu nome:');
    alert('Olá ' + name + ', prazer em te conhecer!');
    headingT.textContent = 'Bem vindo ' + name + '!';
    imageV.setAttribute('src','../images/luffy.jpeg');
    buttonP.remove();
}