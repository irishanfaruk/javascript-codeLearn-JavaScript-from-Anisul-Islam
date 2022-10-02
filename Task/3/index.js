var num1 = prompt('Enter Your First Number : ');
var num2 = prompt('Enter Your Second Number : ');
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10)
var sum, sub, multiply, division, modulus;

sum = num1 + num2
document.write(num1 + ' + ' + num2 + ' = ' + sum + '<br>');

sub = num1 - num2
document.write(num1 + ' - ' + num2 + ' = ' + sub + '<br>');

multiply = num1 * num2
document.write(num1 + ' * ' + num2 + ' = ' + multiply + '<br>');

division = num1 / num2
document.write(num1 + ' / ' + num2 + ' = ' + division + '<br>');

modulus = num1 % num2
document.write(num1 + ' % ' + num2 + ' = ' + modulus);