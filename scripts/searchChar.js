const myChars = document.querySelectorAll(".myChars li");
const searchBtn = document.querySelector(".search");
const charInput = document.querySelector(".charInput");
const emptyUl = document.querySelector(".emptyUl");
const orderBtn = document.querySelector(".order");

searchBtn.addEventListener("click", searchAndCreate);
orderBtn.addEventListener("click", orderUl);

function searchAndCreate() {

    emptyUl.innerHTML = "";

    let searchTxt = String(charInput.value);
    searchTxt = searchTxt.toLowerCase();

    for (let i = 0; i < myChars.length; i++) {

        let char = (myChars[i].textContent).toLowerCase();
        let charNormal = myChars[i].textContent;

        if (char.indexOf(searchTxt) != -1) {
            let item = document.createElement("li");
            item.textContent = charNormal;
            emptyUl.appendChild(item);
        }
    }
}

function orderUl() {

    emptyUl.innerHTML = "";

    let lengthUl = myChars.length;

    for (let i = 0; i < lengthUl; i++) {

        for (let j = 1; j < lengthUl; j++) {

            let previousLength = (myChars[j - 1].textContent).length;
            let forwardLength = (myChars[j].textContent).length;
            let biggerLength = 0;

            if (previousLength > forwardLength) {
                biggerLength = previousLength;
            }
            else {
                biggerLength = forwardLength;
            }

            let pChar = myChars[j - 1].textContent;
            let fChar = myChars[j].textContent;

            for (let k = 0; k < biggerLength; k++) {
                if (pChar[k] > fChar[k]) {
                    let aux = pChar;
                    myChars[j - 1].textContent = fChar;
                    myChars[j].textContent = aux;
                    break;
                }
                else if (pChar[k] < fChar[k]) {
                    break;
                }
            }
        }
        lengthUl--;
    }
}