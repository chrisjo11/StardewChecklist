Array.from(document.getElementsByClassName("checkItem")).forEach(e => {
    e.onclick = function() {
        e.style.setProperty("text-decoration", "line-through");
        e.style.setProperty("color", "gray");
    }
});