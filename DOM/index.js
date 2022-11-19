/*
// get element By Id
// document.getElementById('h1').innerHTML = 'Hello World';
// best way
var myH1 = document.getElementById('h1');
myH1.innerHTML = 'Hello World';

var myH2 = document.getElementById('h2');
myH2.innerHTML = 'Good bye';

var mypera = document.getElementById('pera');
mypera.innerHTML = 'Bye Bye';
*/

/*
// getElementsByTagName
document.getElementsByTagName('h1')[0].innerHTML = 'This My second Heading'
document.getElementsByTagName('h1')[1].innerHTML = 'This My First Heading'
*/

/*

// getElementsByClassName
document.getElementsByClassName('h1')[0].innerHTML = 'This My second Heading'
document.getElementsByClassName('h1')[1].innerHTML = 'This My first Heading'

*/
/*
// query selector
document.querySelector('.h1c').innerHTML = 'This My second'
document.querySelector('#h1id').innerHTML = 'This My first'
document.querySelector('h1').innerHTML = 'This My 3rd'
it's like css selector
*/

// Event Handler to onclick event

/* onclick alert system


function myMsg1() {
    alert("hello buddy 1")
}
function myMsg2() {
    alert("hello buddy 2")
}
function myMsg3() {
    alert("hello buddy 3")
}
function myMsg4() {
    alert("hello buddy 4")
}
*/
/*
// show text on document after click
var myPid = document.querySelector('#pId');

function myMsg1() {
    myPid.innerHTML = 'You clicked button 1';
}
function myMsg2() {
    myPid.innerHTML = 'You clicked button 2';
}
*/

/*
//show img on document after click

var myPid = document.querySelector('#myImg');
function myPic1() {
    myPid.src = '/DOM/img/clcik-1.jpg';
}
function myPic2() {
    myPid.src = '/DOM/img/click-2.jpg';
}
function myPic3() {
    myPid.src = '/DOM/img/click-3.jpg';
}
*/
/*
// create, add, remove html elements

// create
var heading3 = document.createElement('h1');
var text = document.createTextNode('This is our heading');
heading3.appendChild(text);
var myDiv = document.getElementById('my-div');
myDiv.appendChild(heading3);

// create on top
var heading0 = document.createElement('h1');
var text0 = document.createTextNode('This is our heading 0');
heading0.appendChild(text0);
var heading01 = document.getElementsByTagName('h2')[0];
myDiv.insertBefore(heading0, heading01);

// remove
var heading2 = document.getElementsByTagName('h2')[1];
myDiv.removeChild(heading2);

*/
// image slider
/*
var imgs = ["/DOM/img/clcik-1.jpg", "/DOM/img/click-2.jpg", "/DOM/img/click-3.jpg"];
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
}*/
/* Changing CSS style normally
function addStyle() {
    var myVar = document.querySelector("#peraId");
    myVar.style.color = 'salmon'
    myVar.style.fontSize = '3rem'
    myVar.style.fontWeight = 'bold'
    myVar.style.fontStyle = 'italic'
}
// Changing CSS style dynamically
// add 
var myVar = document.querySelector("#peraId");
function addStyle() {
    myVar.classList.add('pera-t')
}
// remove
function removeStyle() {
    myVar.classList.remove('pera-t')
}
*/
/*
// Event Listener by click
// how to use Anonymous function 

document.querySelector('button').addEventListener('click', function() {
    alert('I love You')
});

document.querySelector('button').addEventListener('click', myFa)

function myFa() {
    alert('I love You')
}

// Event Listener by..........
var myNoakhali = document.querySelector('h1');
myNoakhali.addEventListener('mouseover', function(){
    myNoakhali.classList.add('my-noakhali')
})
var myNoakhali = document.querySelector('h1');
myNoakhali.addEventListener('mouseout', function(){
    myNoakhali.classList.remove('my-noakhali')
})
*/
// Event Listeners with multiple elements
/*
document.querySelectorAll('.my-button')[0].addEventListener('click', function () {
    var text = this.innerHTML;
    document.querySelector('h1').innerHTML = text + ' is clicked'
    document.querySelector('h1').style.backgroundColor = '#FDEB3B';

})


document.querySelectorAll('.my-button')[1].addEventListener('click', function () {
    var text = this.innerHTML;
    document.querySelector('h1').innerHTML = text + ' is clicked';
    document.querySelector('h1').style.backgroundColor = '#FDEB3B';

})


document.querySelectorAll('.my-button')[2].addEventListener('click', function () {
    var text = this.innerHTML;
    document.querySelector('h1').innerHTML = text + ' is clicked'
    document.querySelector('h1').style.backgroundColor = '#FDEB3B';

})




// How to make it simple


var lan = document.querySelectorAll('.my-button').length
// for (i = 0; i < 3; i++) {
for (i = 0; i < lan; i++) {
    document.querySelectorAll('.my-button')[i].addEventListener('click', function () {
        var text = this.innerHTML;
        document.querySelector('h1').innerHTML = text + ' is clicked'
        document.querySelector('h1').style.backgroundColor = '#FDEB3B';

    })
}
*/