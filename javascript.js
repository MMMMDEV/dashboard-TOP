const cardsContainer = document.querySelector(".cards-container");
const p = document.createElement("p");
p.classList.add("card-txt");
const btnCard = document.querySelector(".btn-card");
const addCard = document.querySelector(".add-card");



function appendDiv() {
    let childrenDiv = cardsContainer.children.length;
    if (childrenDiv < 8) {
        const p = document.createElement("p");
        p.classList.add("card-txt");
        p.textContent = "Empty";
        const newCard = document.createElement("div");
        newCard.appendChild(p);
        newCard.classList.add("card");
        btnCard.insertAdjacentElement( "beforebegin", newCard);
    } else {
        return;
    }
};

addCard.addEventListener( "click", e => {
    appendDiv();
})
