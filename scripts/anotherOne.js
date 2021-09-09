let myLink = document.querySelector('a');

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