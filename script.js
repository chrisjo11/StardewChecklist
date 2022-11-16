var element = document.getElementById("progressBar");
var width = 2.5;
let click = 1;
let clicked = [];

Array.from(document.getElementsByClassName("checkItem")).forEach(e => {
        e.onclick = function() {
            if(!clicked.includes(e)) {
            e.style.setProperty("text-decoration", "line-through");
            e.style.setProperty("color", "gray");
            width += 2.5; 
            element.style.width = width + '%'; 
            clicked.push(e);
        }
    }
});

document.querySelector("button").onclick = function() {
    if(click%2 != 0) {
        console.log("hola");
        document.body.style.backgroundImage = "url(images/svdark.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
    } else if(click%2 == 0) {
        console.log("hello");
        document.body.style.backgroundImage = "url(images/svlight.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
    }
    click++;
}