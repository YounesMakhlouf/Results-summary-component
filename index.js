const categoriesSection = document.querySelector("#categories");

function Func() {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => data.map(addElement))
        .catch((error) => console.error(error));
}

function addElement(element) {
    try {
        const {category, icon, score} = element;
        const html = getCategory(category, icon, score);
        categoriesSection.insertAdjacentHTML('beforeend', html);
    } catch (error) {
        console.error(error);
    }
}

function getCategory(category, icon, score) {
    return `<div class="category" id="${category}">
                <div class="icon-group">
                    <img alt="${category}" src="${icon}">
                    <span class="${category}">${category}</span>
                </div>
                <div class="total-score">
                   <span class="score">${score}</span>
                    <span class="total transparent">/ 100</span>
                </div>
            </div>`;
}

Func();