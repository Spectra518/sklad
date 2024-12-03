// Элементы
var modal = document.getElementById("modal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

// Открываем окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем  окно
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем окно при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}