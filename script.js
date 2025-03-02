'use strict';

// const selected = document.querySelector('.selected');
// const options = document.querySelector('.options');
// const optionList = document.querySelectorAll('.option');




// selected.addEventListener('click', () => {
//   options.classList.toggle('active');
// })
// optionList.forEach(option => {
//   option.addEventListener('click', () => {
//     selected.innerHTML = option.querySelector('span').innerText;
//     options.classList.remove('active');
//   });
  
// });

let itemId = 1;
function addItem() {
    const container = document.getElementById("items");
    const item = document.createElement("div");
    item.className = "accordion";
    item.innerHTML = `<div onclick="toggleItem(${itemId})">Товар ${itemId} <span class="plus-minus">+</span></div>
    <div id="content-${itemId}" class="content">
        <label>Название товара</label>
        <input type="text">
        <div class="grid">
            <input type="text" placeholder="Длина">
            <input type="text" placeholder="Ширина">
            <input type="text" placeholder="Высота">
            <input type="text" placeholder="Объём">
        </div>
        <div class="grid-vertical">
            <input type="text" placeholder="Введите вес коробки">
            <input type="text" placeholder="Введите количество коробок">
            <input type="text" placeholder="Введите стоимость товара">
        </div>
        <label><input type="checkbox"> Хрупкий товар</label>
    </div>`;
    container.appendChild(item);
    itemId++;
}

function toggleItem(id) {
    const content = document.getElementById(`content-${id}`);
    const btn = content.previousElementSibling.querySelector(".plus-minus");
    if (content.style.display === "block") {
        content.style.display = "none";
        btn.textContent = "+";
    } else {
        content.style.display = "block";
        btn.textContent = "-";
    }
}