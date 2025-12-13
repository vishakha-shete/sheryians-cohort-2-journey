let startBtn = document.getElementById("start-btn");
let menu = document.getElementById("start-menu");
let desktop = document.getElementById("windows")
let option = document.getElementById("context-menu")
let icon = document.getElementById("desktop-icon")
let myComputer = document.getElementById("my-computer-window");
let close = document.querySelector(".close-btn");
let title = document.querySelector(".title-bar")
let minimizeBtn = document.querySelector(".minimize-btn");



startBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
document.addEventListener("click", function (e) {
    if (
        menu.style.display === "block" &&
        !menu.contains(e.target) &&
        !startBtn.contains(e.target)
    ) {
        menu.style.display = "none";
    }
});
desktop.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    option.style.display = "block";
    option.style.left = e.pageX + "px";
    option.style.top = e.pageY + "px";
});
document.addEventListener("click", function (e) {
    if (
        option.style.display = "block" &&
        !option.contains(e.target)
    ) {
        option.style.display = "none"
    }
});
icon.addEventListener("dblclick", function (e) {
    console.log("vishu");
})

icon.addEventListener("dblclick", function () {
    myComputer.style.display = "block";
});

close.addEventListener("click", function () {
    myComputer.style.display = "none";
});
minimizeBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // important (drag + bubbling safety)
    myComputer.style.display = "none";
});

