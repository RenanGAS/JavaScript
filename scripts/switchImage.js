let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

console.log("main.js");

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'JavaScript é legal, ' + storedName + '!';
}

function setUserName() {
  let myName = prompt('Digite seu nome:');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'JavaScript é legal, ' + myName + '!';
  }
}

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox.png') {
    myImage.setAttribute('src', 'images/opera.png');
    myImage.setAttribute('alt', 'The Opera logo: a red ball with a huge hole.');
  } else {
    myImage.setAttribute('src', 'images/firefox.png');
  }
}

myButton.onclick = function () {
  setUserName();
}

