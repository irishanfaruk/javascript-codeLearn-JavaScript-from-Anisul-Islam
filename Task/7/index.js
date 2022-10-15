// create a simple calculator with add, sub, mul, div

function add(num1, num2) {
    var sum = num1 + num2
    return sum;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    var mul = num1 * num2
    return mul;
}

function div(num1, num2) {
    return num1 / num2;
}

function modul(num1, num2) {
    var modu = num1 % num2
    return modu;
}

console.log(add(50, 40));
console.log(sub(50, 40));
console.log(multi(50, 40));
console.log(div(50, 40));
console.log(modul(50, 40));


document.write(add(50, 40) + "<br>");
document.write(sub(50, 40) + "<br>");
document.write(multi(50, 40) + "<br>");
document.write(div(50, 40) + "<br>");
document.write(modul(50, 40) + "<br>");
