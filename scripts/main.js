let myImage = document.querySelector('img');

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