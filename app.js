let root = document.documentElement;

root.addEventListener("mousemove", e =>{
    var xBottom = ((e.screenX)/ screen.height) *20;
    var yBottom = ((e.screenY-20)/ screen.width) *80;

    var xMid = ((e.screenX)/ screen.height) *30;
    var yMid = ((e.screenY-20)/ screen.width) *5;

    var xTop = ((e.screenX)/ screen.height) *50;
    var yTop = ((e.screenY-20)/ screen.width) *7;

    root.style.setProperty('--posX-bottom', xBottom + "%");
    root.style.setProperty('--posY-bottom', yBottom + "%");

    root.style.setProperty('--posX-mid', xMid + "%");
    root.style.setProperty('--posY-mid', yMid + "%");

    root.style.setProperty('--posX-top', xTop + "%");
    root.style.setProperty('--posY-top', yTop + "%");
})
