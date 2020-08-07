let root = document.documentElement;

root.addEventListener("mousemove", e =>{
    var xBottom = ((e.screenX)/ screen.height) *10;
    var yBottom = ((e.screenY-20)/ screen.width) *30;

    var xMid = ((e.screenX)/ screen.height) *10;
    var yMid = ((e.screenY-20)/ screen.width) *10;

    var xTop = ((e.screenX)/ screen.height) *2;
    var yTop = ((e.screenY-20)/ screen.width) *3;

    root.style.setProperty('--posX-bottom', xBottom + "%");
    root.style.setProperty('--posY-bottom', yBottom + "%");

    root.style.setProperty('--posX-mid', xMid + "%");
    root.style.setProperty('--posY-mid', yMid + "%");

    root.style.setProperty('--posX-top', xTop + "%");
    root.style.setProperty('--posY-top', yTop + "%");
})