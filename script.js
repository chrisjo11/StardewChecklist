var element = document.getElementById("progressBar");
var width = 2.5;

Array.from(document.getElementsByClassName("checkItem")).forEach(e => {
    e.onclick = function() {
        e.style.setProperty("text-decoration", "line-through");
        e.style.setProperty("color", "gray");
        width += 2.5; 
        element.style.width = width + '%'; 
    }
});