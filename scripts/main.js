let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName + '!';
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName + '!';
  }
}

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox.png') {
    myImage.setAttribute('src', 'images/opera.png');
    myImage.setAttribute('alt', 'The Opera logo: a red ball with a huge hole.');
  } else if (mySrc === 'images/opera.png') {
    myImage.setAttribute('src', 'images/firefox.png');
  } else {
    console.log("Opa");
  }
}

myButton.onclick = function () {
  setUserName();
}

