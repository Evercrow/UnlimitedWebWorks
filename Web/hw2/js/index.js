//Домашка 3
let user = prompt("Привет, как тебя зовут?");
document.getElementsByTagName("h1")[0].textContent=`Добро пожаловать в мой книжный уголок,${user}!`;

// Get the modal
let all_modal = document.getElementsByClassName('modal-bg');

for (const modal of all_modal){
    
}

// Cоберем все элементы закрытия модальных окон
let crosses = document.querySelectorAll(".close");

// Cоберем все элементы открытия модальных окон
let all_buttons = document.querySelectorAll(".btn");


// Вешаем обработчики кликов, чтобы не прописывать каждому вручную onclick
for (i = 0; i < all_buttons.length; i++) {
    button = all_buttons[i];
    button.addEventListener('click', ShowBook);
    span = crosses[i];
    span.addEventListener('click',CloseBook);
}
// Собираем id модального окна из id кнопки и включаем показ
function ShowBook() {
    const show_el = document.getElementById(this.parentElement.id+"-desc");
    show_el.style.display = "block";
}

//при нажатии отключаем показ модального блока
function CloseBook() {
    this.parentElement.parentElement.style.display='none';
}


// Если щелкнули вне окна -закрываем. Спасибо  alert() ,всегда можно глянуть что за объект в обработке сейчас.
window.onclick = function(event) {
    // alert(event.target);
    if (event.target.className == "modal-bg") {
        event.target.style.display = "none";
    }
}