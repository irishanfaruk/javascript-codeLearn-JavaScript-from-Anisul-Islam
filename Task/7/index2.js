// with IIFE
(function dis2(num1, num2) {
    sum = num1 + num2;
    console.log(sum)
})(70, 80);

// with function expression
// 1 number way 
var sum1 = function add1(num1, num2) {
    sum = num1 + num2;
    console.log(sum);
}

sum1(20, 10);

// 2 number way 
var sum2 = function add(num1, num2) {
    var sum = num1 + num2
    return sum;
}
console.log(sum2(50, 40));