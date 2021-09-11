let myLink = document.querySelector('.reload');

console.log("anotherOne.js");

function alertPageReload(){
    let confirm = prompt("Deseja recarregar a página? (y/n)");
    if (confirm == "y") {
        myLink.setAttribute('href','index.html');
    } else {
        myLink.setAttribute('href','#');
    }
}

myLink.onclick = function(){
    alertPageReload();
}