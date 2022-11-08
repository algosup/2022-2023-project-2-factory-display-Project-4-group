let screens = document.getElementById("screens")
let screensNbr = 1;
window.onload = function() {
    for (let i = 0; i < screensNbr; i++) {
         var div = document.createElement("div");
         div.className = "screen";
         div.innerHTML = " ";
         screens.appendChild(div);
    }
}