let myLink = document.querySelector('a');

console.log("anotherOne.js");

function alertPageReload(){
    let confirm = prompt("Deseja recarregar a página? (y/n)");
    if (confirm == "y") {
        myLink.setAttribute('href','');
    } else {
        myLink.setAttribute('href','#');
    }
}

myLink.onclick = function(){
    alertPageReload();
}