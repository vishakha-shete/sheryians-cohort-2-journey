var img = document.querySelector('img');
var love = document.querySelector('#love');

img.addEventListener('dblclick', function () {

    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = "1";

    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)";
        love.style.opacity = "0";
    }, 700);

});
