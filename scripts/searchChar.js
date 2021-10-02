const myChars = document.querySelectorAll(".myChars li");
const searchBtn = document.querySelector(".search");
const charInput = document.querySelector(".charInput");
const emptyUl = document.querySelector(".emptyUl");

searchBtn.addEventListener("click", searchAndCreate);

function searchAndCreate() {

    let searchTxt = charInput.value;
    emptyUl.innerHTML = "";

    for (let i = 0; i < myChars.length; i++) {
        let char = myChars[i].textContent;
        if (char.indexOf(searchTxt) != -1) {
            let item = document.createElement("p");
            item.textContent = char;
            emptyUl.appendChild(item);
        }
    }
}