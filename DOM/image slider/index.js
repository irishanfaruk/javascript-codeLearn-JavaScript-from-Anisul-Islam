
var imgs = ["/img/clcik-1.jpg", "/img/click-2.jpg", "/img/click-3.jpg"];
var imgTag = document.querySelector('img');
var count = 0;
function nxt() {
    count++
    if (count >= imgs.length) {
        count = 0;
        imgTag.src = imgs[count];
    }
    else {
        imgTag.src = imgs[count];
    }
}
function pev() {
    count--
    if (count < 0) {
        count = imgs.length - 1;
        imgTag.src = imgs[count];
    }
    else {
        imgTag.src = imgs[count];
    }
}