// Get the modal
var modal = document.getElementsByClassName('modal');


// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// oButton[i].className
// Get the <span> element that closes the modal
const crosses = document.querySelectorAll(".close");

const all_buttons = document.querySelectorAll(".books");
// When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
for (i = 0; i < all_buttons.length; i++) {
    button = all_buttons[i];
    button.addEventListener('click', ShowBook);
    span = crosses[i];
    span.addEventListener('click',CloseBook);
}

function ShowBook(event) {
    show_el = document.getElementById(event.id+"-desc");
    show_el.style.display = "block";
}

function CloseBook() {
    // close_el = document.getElementById(event.id+"-desc");
    // show_el.style.display = "none";
    modal.style.display = "none";
}
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}