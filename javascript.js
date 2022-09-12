const cardsContainer = document.querySelector(".cards-container");
const btnCard = document.querySelector(".btn-card");
const addCard = document.querySelector(".add-card");



function appendDiv() {
    let childrenDiv = cardsContainer.children.length;
    if (childrenDiv < 8) {
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        btnCard.insertAdjacentElement( "beforebegin", newCard);
    } else {
        return;
    }
};

addCard.addEventListener( "click", e => {
    appendDiv();
})
