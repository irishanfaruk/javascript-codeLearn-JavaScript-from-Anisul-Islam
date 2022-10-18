/*ভেরিয়েবল হল ডেটা সঞ্চয় করার পাত্র (storing data values).
এই উদাহরণে, x, y, এবং z হল ভেরিয়েবল, var কীওয়ার্ড দিয়ে ঘোষণা করা হয়েছে:*/
// This is number tag 
/*var x = 5;
var y = 6;
var z = x + y;*/

// This is strings tag 
/*var x = 'Faruk';
var y = ' Ahmed';
var z = x + y;*/

//many way to declared variable  
/*  var name = 'Faruk Ahmed';
    var age = 21;*/

// var name;
// var age;


/*var myName, age;
myName = 'Faruk Ahmed ';
age = 21;
document.write(myName);
document.write(age);*/


//how to convert number to string 

/* var num = 15;
num = toString(num)
console.log(typeof (num));

// convert string to integer
var num2 = '390';
num2 = parseInt(num2);
console.log(typeof(num2));

var num3 = '390.80';
num3 = parseFloat(num3);
console.log(typeof(num3)); */

// Strings concatenate (স্ট্রিং সংযুক্ত)

// document.write(' Faruk' + ' Ahmed')

/*var firstName = 'MD';
var lastName = ' Omar';
var fullName = firstName + lastName;
document.write('My name is ' + fullName + ' Faruk');*/

/*var num1 = 35;
var num2 = 40;
document.write('num1 = ' +  num1  + '  and num2 =  ' + num2);*/


//Library functions for string

/*var x = "Bangladesh";
var y = x.length;
document.write('Number of character ' + y);*/
// একটু অন্য ভাবে 
/*var x = "Bangladesh";
document.write('Number of character ' + x.length);*/

//How to take input from the user (কিভাবে ব্যবহারকারীর কাছ থেকে ইনপুট নিতে হয়)

/*var x = prompt("Enter your name: ");
document.write('Number of character ' + x.length);*/

//Print a specified character(নিদিষ্ট  কোনো ক্যারেক্টারকে প্রিন্ট করা )
/*var x = 'Bangladesh'
document.write(x.charAt(3));*/

//Convert to uppercase(বড় হাতের অক্ষরে রূপান্তর করুন:)
/*var x = 'Bangladesh ';
x = x.toUpperCase();
document.write(x);*/

//Convert to LowerCase(ছোট হাতের অক্ষরে রূপান্তর করুন)
/*var y = ' Bangladesh';
y = y.toLowerCase();
document.write(y);*/

// Strings concatenate (স্ট্রিং সংযুক্ত)
// একটু অন্য ভাবে 

/*var x1 = 'Bangladesh';
var x2 = 'is a beautifull country';
//document.write(x1.concat(x2))
var x = x1.concat(x2)
document.write(x)*/


// strings slice 
/*var x = 'Bangladesh';
x = x.slice(1, 4);
x = x.toUpperCase();
document.write(x);*/

// The mathematical symbol used for addition, subtraction, multiplication, division is called operator (যোগ, বিয়োগ, গুন, ভাগের জন্য যেই গাণিতিক চিহ্ন ব্যবহার করা হয় তাকে operator বলে )

/*
Aritmetic Operators:-
+	Addition (যোগ)
-	Subtraction (বিয়োগ)
*	Multiplication (গুন)
/	Division (ভাগ)
%	Modulus (Division Remainder) {ভাগ শেষ }
**	Exponentiation
++	Increment
--	Decrement
*/

/*
Assignment operators:-

Operator	Using System 	    Example
=	        x = y	            x = y
+=	        x += y	            x = x + y
-=	        x -= y	            x = x - y
*=	        x *= y	            x = x * y
/=	        x /= y	            x = x / y
%=	        x %= y	            x = x % y
**=	        x **= y	            x = x ** y

*/

//Make own calculator for users

/*
input from user

var num1 = prompt('Enter Your First number : ');
var num2 = prompt('Enter Your second number : ');

sttings to number

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

sum or sub


var sum, sub;
sum = num1 + num2;
document.write('Addition = ' + sum + "<br>");
sub = num1 - num2;
document.write('Subtraction = ' + sub);
*/

//Area of various shapes

/*
var base = parseFloat(prompt('Enter your base = '))

var height = parseFloat(prompt('Enter your height = '))

var area = base * height
document.write('Area = ' + area);
*/

//make temperature converter

//Fahrenheit to celsius

/*
var fahrenheit1 = parseFloat(prompt('Enter your Fahrenheit : '))
var celsius1 = (fahrenheit1-32) * (5/9)
document.write("Celsius = " + celsius1 + '<br>')
*/

//celsius to fahrenheit

/*
var celsius2 = parseFloat(prompt('Enter your Celsius : '))
var fahrenheit2 = (celsius2*9/5) + (35)
document.write("Fahrenheit = " + fahrenheit2)
*/

//Relational operators

/*
Operator	Description
..........................

>	        greater than (বড়)
>=	        greater than or equal to
<	        less than (ছোট)
<=	        less than or equal to
==	        equal to
===	        equal value and equal type
!=	        not equal
!==	        not equal value or not equal type
?	        ternary operator
*/

//Logical Operators

/*
Operator	Description
.......................

&&	        logical and
||	        logical or
!	        logical not

*/


// if, else if, else

// Even or odd

// If a number ends in 0 after division by 2 then it will be even and if not 0 then it is odd (যদি কোনো সংখ্যা কে ২ দিয়ে ভাগ করার পর ভাগ শেষ ০ থাকে তাহলে সেটা হবে Even আর ০ না হলে সেটি odd)

// যেমন 
/*
var x = 5;
if(x % 2 == 0)
console.log('Even');

//এটা Even হবেনা কারণ ৫ কে ২ দিয়ে ভাগ করলে ভাগশেষ ০ হয় না ১ থাকে

var x = 5;
if(x % 2 != 0)
console.log('odd');

// এটা odd হবে কারণ ৫ কে ২ দিয়ে ভাগ করলে ভাগশেষ ০ হয় না ১ থাকে

best practice is below down

var x = 5;
if (x % 2 == 0)
console.log('Even');
else
console.log('odd');

...........................................................
//Task with Relational operators
...........................................................

var x = parseInt(prompt('Enter your mark'));

if (x >= 80)
    document.write("A+")
else if (x >= 70)
    document.write("A")
else if (x >= 60)
    document.write("A-")
else if (x >= 50)
    document.write("B")
else if (x >= 40)
    document.write("C")
else if (x >= 33)
    document.write("D")
else
    document.write('Sorry you are faill')

*/

/*
...........................................................
//Same Task with Logical operators
.............................................................
var x = parseInt(prompt('Enter your mark'));
if (x >= 100 || x < 0)
document.write('Invalid Number ')
else if (x >= 80 && x <= 100)
    document.write("A+")
else if (x >= 70 && x <= 79)
    document.write("A")
else if (x >= 60 && x <= 69)
    document.write("A-")
else if (x >= 50 && x <= 59)
    document.write("B")
else if (x >= 40 && x <= 49)
    document.write("C")
else if (x >= 33 && x <= 39)
    document.write("D")
else
    document.write('Sorry you are faill')
    */
/*

var x = prompt('Enter Your Number-1: ')
var y = prompt('Enter Your Number-2: ')
var z = prompt('Enter Your Number-3: ')
if(x > y && x > z)
document.write("The Lage Number is X = " + x);
else if(y > x && y > z)
document.write("The Lage Number is Y = " + y);
else (z > x && z > y)
document.write("The Lage Number is Z = " + z);

*/
/*
//vowel and consonant

var x = prompt("Enter your letter")
x = x.toLocaleLowerCase()
if( x == "a" || x == "e" || x == "i" || x == "o" || x == "u")

document.write(x + " letter is vowel")

else
document.write(x + " letter is consonant")
*/

// digit spelling 
/*
var digit = prompt('Enter Your Digit')
if(digit == 0)
document.write("Zero");
else if(digit == 1)
document.write("One");
else if(digit == 2)
document.write("Two");
else if(digit == 3)
document.write("Three");
else if(digit == 4)
document.write("Four");
else if(digit == 5)
document.write("Five");
else if(digit == 6)
document.write("Sixs");
else if(digit == 7)
document.write("Seven");
else if(digit == 8)
document.write("Eight");
else if(digit == 9)
document.write("Nine");
else if(digit == 10)
document.write("Ten");
else
document.write('Not a valid number');

// Let's do it with switch (এটা করা যাক switch দিয়ে)

var digit = prompt('Enter Your Digit')


// Use the switch statement to select one of many code blocks to be executed.(স্যুইচ স্টেটমেন্ট ব্যবহার করে অনেকগুলো কোড ব্লকের মধ্যে একটি নির্বাচন করতে হবে।)

switch(digit){
    case '1':
    document.write("One");
    break;
    case '2':
    document.write("Two");
    break;
    case '3':
    document.write("Three");
    break;
    case '4':
    document.write("Four");
    break;
    case '5':
    document.write("Five");
    break;
    case '6':
    document.write("Sixs");
    break;
    case '7':
    document.write("Seven");
    break;
    case '8':
    document.write("Eight");
    break;
    case '9':
    document.write("Nine");
    break;
    case '10':
    document.write("Ten");
    break;
    default:
    document.write('Not a valid number');
}
*/
// Loop
// Loops can execute a block of code a number of times.(লুপ কোডের একটি ব্লক বহুবার কার্যকর করতে পারে।)

/* for(starting; condition; update;){

}
starting = From where the loop will start(লুপ টা  যেইখান থেকে শুরু হবে )

condition = How long will it last? (কত পর্যন্ত চলবে )

update = How much will update/increase each time(প্রতিবার কত  করে update/ বাড়বে)


for(var x = 1; x <= 10; x++){
    document.write('<h1>Rishan Faruk</h1>');
}
for(var x = 1; x <= 10; x = x + 1){
    document.write('<h1>Rishan Faru</h1>');
}
*/
/* How to print 1-100
for (var x = 1; x <= 100; x = x + 1) {
    document.write(' ' + x);
}
// How to print even numbe like 0,2,4,6,--100
for (var x = 0; x <= 100; x = x + 2) {
    document.write(' ' + x);
}

// How to print odd numbe like 1,3,5,--99
for (var x = 1; x <= 99; x = x + 2) {
    document.write(' ' + x);
}
*/
/* How to print 100-1

for (var x = 100; x >= 1; x = x - 1) {
    document.write(' ' + x);
 }
 */
/* sum of 1 to 5

var sum = 0
for(var x = m; x <= n; x+ 1){
    sum = sum + x;
}
document.write(sum);
*/
// sum of fast to last number form user 
/*
var m = parseInt(prompt('Enter Your First Number'));
var n = parseInt(prompt('Enter Your Last Number'));
var sum = 0
for (var x = m; x <= n; x + 1) {
    sum = sum + x;
}
document.write(sum);
*/
// Running a program many times(একটা প্রোগ্রাম অনেক বার চালানো)
/*
for (var x = 1; x <= 5; x++) {
    var num1 = parseInt(prompt('Enter Your First Number'));
    var num2 = parseInt(prompt('Enter Your Last Number'));
    var sum = num1 + num2;
    console.log(sum);
}
*/

// while loop
// The while loop loops through a block of code as long as a specified condition is true.(একটি নির্দিষ্ট শর্ত সত্য হওয়া পর্যন্ত যখন লুপ কোডের একটি ব্লকের মধ্য দিয়ে লুপ করে।)


// Difference between for and while loops (পার্থক্য for এবং while লুপ এর মধ্যে)


/* for loop like this

starting = From where the loop will start(লুপ টা  যেইখান থেকে শুরু হবে )

condition = How long will it last? (কত পর্যন্ত চলবে )

update = How much will update/increase each time(প্রতিবার কত  করে update/ বাড়বে)


for(starting; condition; update;){

}

example

for ((starting)var i  = 1; (condition)i <=5; (update)  i++) {
    document.write( " "+ i)
  }
*/

// while loop
/*
var i = 1; // starting

while(i <=5)//condition
{
i++ //update
}

// example
var i = 1;
while(1 <= 5){
    i++
    document.write(' '+ i)
}


var i = 1;
var sum = 0;
while (i <= 10) {
    sum = sum + i;
    i = i + 1
}
document.write(sum);

// even number 2-100
var i = 2;
var sum = 0;
while (i <= 100) {
    sum = sum + i;
    i = i + 2
}
console.log(sum);
*/

// do -while loop

/*syntax of for loop
for(var i= 1; i<=10; i++){
    console.log(i)
}


// syntax of while loop
var x = 1;
while (x <= 10) {
    x++;
    console.log(x)
}

// syntax of do -while loop

var i = 1; // starting
do {
    console.log(i);
    i++; //update
} while (i <= 10);//condition
*/

// how to use break and continue(কিভাবে break এবং continue ব্যবহার করবো)

/*  Use of break

for (var x = 1; x <= 100; x++) {
    console.log(" " + x); // এইখানে প্রিন্ট করলে ১-১০ পর্যন্ত প্রিন্ট হবে
    if (x == 10) {
        break;
    }
    // console.log(" " + x); // এইখানে প্রিন্ট করলে ১-৯ পর্যন্ত প্রিন্ট হবে
}
*/


/* Use of continue

for (var x = 1; x <= 50; x++) {

    if (x == 10) {
        continue;           // Print nomal way
    }

    if (x % 2 == 0) {
        continue;           //Print odd number
    }

    if (x % 2 != 0) {
        continue;           //Print even number
    }

    console.log(" " + x);
}

*/

// ternary operator = This operator is frequently used as an alternative to an if...else statement. (এই অপারেটরটি প্রায়শই if...else স্টেটমেন্টের বিকল্প হিসাবে ব্যবহৃত হয়।)


// var number = Number(prompt('Enter your number'));

// If 2 conditions are met (যদি ২ টি Condition হয়ে থাকে তাহলে) 

//  with if or else 

/*if (number > 0) {
    console.log('positive');
}
else {
    console.log('negative');
}*/
// With ternary operator


/* Number 1 way
var y = number > 0 ? 'positive' : 'negative'
console.log(y)*/

/* number 2 way
number > 0 ? console.log('positive') : console.log('negative');
*/

// If the condition is more than 2 then(যদি ২ এর অধিক  Condition হয়ে থাকে তাহলে)

//  with if or else 
/*if (number > 0) {
    console.log('positive');
}
/*else if (number < 0) {
    console.log('Negative');
}
else {
    console.log('Zero');
}*/

/*
with ternary operator
var y = number > 0 ? 'positive' : number < 0 ? 'Negative' : 'Zero';
console.log(y)
*/

// traditional function
//function 
/*
var x = 5;
var y = x * x;
console.log(y) + '<br>';

var x = 5;
var y = x * x;
console.log(y) + '<br>';

var x = 5;
var y = x * x;
console.log(y) + '<br>';

*/

//A task that needs to be done repeatedly can be done 1 time with a function(এমন বারবার করা লাগে এমন কাজকে function দিয়ে ১ বার করা যায়)


/* কিভাবে এটা use করা হয়

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). (একটি জাভাস্ক্রিপ্ট ফাংশন ফাংশন কীওয়ার্ড দ্বারা সংজ্ঞায়িত করা হয়, একটি নাম অনুসরণ করে, বন্ধনী () দ্বারা অনুসরণ করা হয়।)

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables). (ফাংশনের নামগুলিতে অক্ষর, অঙ্ক, আন্ডারস্কোর এবং ডলার চিহ্ন থাকতে পারে (ভেরিয়েবলের মতো একই নিয়ম))

The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)(বন্ধনীতে কমা দ্বারা বিভক্ত প্যারামিটার নাম অন্তর্ভুক্ত থাকতে পারে: (প্যারামিটার1, প্যারামিটার2, ...))
*/
/*
// create function

function i() {
    var x = 5;
    var y = x * x;
    //console.log('Result =  ' + y + '<br>');

    document.write('Result =  ' + y + '<br>');
}

// Calling A function

i()
i()
i()
i()
*/

/*

// using parameter

// create function
function i(x) {

    var y = x * x;
    //console.log('Result =  ' + y + '<br>');

    document.write('Result =  ' + y + '<br>');
}

// Calling A function

i(5)
i(9)
i(12)
i(17)
*/

/*
//using multiple parameters

// create function

function i(x1, x2) {

    var y = x1 * x2;
    //console.log('Result =  ' + y + '<br>');

    document.write('Result =  ' + y + '<br>');
}


// Calling A function

i(5,6);
*/
/*
//using multiple parameters with return

// create function

function i(x1, x2) {

    var y = x1 * x2;
    return  y;
}


// Calling A function

// document.write(i(5, 6));
var z = i(5, 6);
document.write(z)''
*/

/*
//Addition function (যৌগিক ফাংশন)

// create function
function i(x1, x2) {

    var y = x1 + x2;
    //console.log('Result =  ' + y + '<br>');

    document.write('Result =  ' + y + '<br>');
}
// Calling A function
i(20, 10);

//subtraction function(বিয়োগ ফাংশন)

// create function
function z(x1, x2) {

    var y = x1 - x2;
    //console.log('Result =  ' + y + '<br>');

    document.write('Result =  ' + y + '<br>');
}
// Calling A function
z(50, 20);
*/

// IIFEs and function

/*An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. (একটি IIFE (Immediately Invoked Function Expression) হল একটি জাভাস্ক্রিপ্ট ফাংশন যা সংজ্ঞায়িত হওয়ার সাথে সাথে চলে।)*/

/*
//normal/traditional function

function dis() {
    console.log('Hello')
}
dis()

    // IIFE function

    // (function dis2() {
    //     console.log('Hello agan')
    // })();

    (function dis2(fb) {
        console.log(fb)
    })("Hello again");

*/
/*
//function expression


// var dis1 = function dis6() {
//     console.log("hello broh");
// }

// dis1();


var dis1 = function dis6(msg) {
    console.log(msg);
}

dis1('hello broh');

*/

/*
// math with IIFE
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

*/

// how to create and use array
// An array is formed by many variables(অনেক গুলা variable মিলে array  ঘটিত হয়)

/*
Normally called variable like (সাধারণ ভাবে আমরা যেইভাবে variable কল করি)
var x = "faruk"
var y = 'Ahmed'

// or
var a1, b1, c1, d1;
a1 = 'md'
b1 = 'omar'
c1 = 'faruk'
d1 = 'ahmed'
*/
// variable called with array (array এর মাধ্যমে variable কল করি)

/*
// Method of using array 1
var names = new Array(); //You can declare the size of the array if you want like Array(10) this is Not mandatory
// var names = new Array(10);
names[0] = "Faruk"
names[1] = "Ahmed"
names[2] = "Omar"
names[3] = "Ariyan"
names[4] = "Afrahim"
names[5] = "Rohan"
names[6] = "Rafin"
names[7] = "Maysha"
//print full array

console.log(names);

//print single array 

console.log(names[2], names[0])
console.log(names[3], names[5])
console.log(names[4], names[6])
console.log(names[7])

//how to chk array size 

console.log(names.length);.*/

/*
// Method of using array 2

var names1 = ['Faruk', 'Omar', 'MD', 'Ariyan', 'Afrahim', 'Rohan', 'Rafin', 'Maysha']


//print full array

console.log(names1);


//print single array 

console.log(names1[2], names1[1], names1[0])
console.log(names1[3], names1[5])
console.log(names1[4], names1[6])
console.log(names1[7])

//how to chk array size 

console.log(names1.length);

---------------------------------------------------------------
push
The push() method adds new items to the end of an array.
The push() method changes the length of the array.
The push() method returns the new length.
-------------------------------------------------------------------

names1.push('And,');
names1.push('Who');
names1.push('are');
names1.push('you');
console.log(names1);
console.log(names1.length);
console.log(names1[8])


---------------------------------------------------------------------
pop
The pop() method removes (pops) the last element of an array.
The pop() method changes the original array.
The pop() method returns the removed element.
------------------------------------------------------------------------


names1.pop()
console.log(names1);
console.log(names1.length);


// note: push এর মাধ্যমে array তে নতুন আইটেম যোগ করা যায় array এর শেষে, আর pop আর মাধ্যমে array এর শেষ আইটেম কে রিমুভ করা যায় 


// How to concat(add) 2 arrays together(২ টি array কিভাবে  একসাথে concat  (যোগ ) করা যায়)

var x1 = ['Bangladesh', 'India']
var x2 = ['Srilanka', 'Nepal']
var x = x1.concat(x2);
console.log(x)

*/

/*
//How to loop an Array

// with number 
var num = [10, 20, 30, 40, 50]
for (var i = 0; i < 5; i++) {
    console.log(num[i])
}

// with string 

var names2 = ['MD', 'Omar', 'Faruk', 'I am']
for (var i = 0; i < 4; i++) {
    console.log(names2[i])
}

// sum with array loop

var num1 = [10, 20, 30, 40, 50]
var sum = 0
for (var x = 0; x < 5; x++) {
    console.log(num1[x])
    sum = sum + num1[x]
}
console.log(sum)

// sum with array loop input from user

var num2 = new Array();
for (var y = 0; y < 5; y++) {
    num2[y] = parseInt(prompt('Enter a number'))
}

var sum = 0
for (var y = 0; y < 5; y++) {
    console.log(num2[y])
    sum = sum + num2[y]
}
console.log(sum)
*/

/*
// Array library methods


var names = ['Faruk', 'Omar', 'MD', 'Ariyan', 'Afrahim', 'Rohan', 'Rafin', 'Maysha']

//print full array

console.log(names);


//print single array 

console.log(names[2], names[1], names[0])
console.log(names[3], names[5])
console.log(names[4], names[6])
console.log(names[7])

//how to chk array size 

console.log(names.length);


---------------------------------------------------------------
    push
The push() method adds new items to the end of an array.
The push() method changes the length of the array.
The push() method returns the new length.
-------------------------------------------------------------------

names.push('And,');
console.log(names);
console.log(names.length);
console.log(names[5])


---------------------------------------------------------------------
    pop
The pop() method removes(pops) the last element of an array.
The pop() method changes the original array.
The pop() method returns the removed element.
------------------------------------------------------------------------

names.pop()
console.log(names);
console.log(names.length);



------------------------------------------------------------------
    concat()
The concat() method concatenates(joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.
------------------------------------------------------------------

var x1 = ['Bangladesh', 'India']
var x2 = ['Srilanka', 'Nepal']
var x = x1.concat(x2);
console.log(x)



// shift opposite of pop 
------------------------------------------------------------------
    shift()
The shift() method removes the first item of an array.
The shift() method changes the original array.
The shift() method returns the shifted element.
------------------------------------------------------------------

names.shift()
console.log(names);
console.log(names.length);


// unshift opposite of push
----------------------------------------------------------------
    unshift()
The unshift() method adds new elements to the beginning of an array.
The unshift() method overwrites the original array.
-------------------------------------------------------------------


names.unshift('Rishan')
console.log(names);
console.log(names.length);



----------------------------------------------------------------
    splice()
The splice() method adds and / or removes array elements.
The splice() method overwrites the original array.




Syntax (using systems)
names.splice(index, howmany, item1, ....., itemX)

Parameter	            Description
--------------------------------------
index	                Required.
                        The position to add/remove items.
                        Negative value defines the position from the end of the array.

howmany	                Optional.
                        Number of items to be removed.
item1, 
..., itemX	            Optional.
                        New elements(s) to be added.
-------------------------------------------------------------------

// add Elements 
names.splice(1, 0, 'Hi bro', 'you are mad')
console.log(names);

// remove Elements 
names.splice(1, 2,)
console.log(names);

// both 
names.splice(6, 2, 'Maysha', 'Rafin')
console.log(names);


----------------------------------------------------------------
        slice()
The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a(not inclusive) given end.
The slice() method does not change the original array.




Syntax
array.slice(start, end)


Parameter	                Description
-------------------------------------------
start	                    Optional.
                            Start position. Default is 0.
                            Negative numbers select from the end of the array.


end	                        Optional.
                            End position. Default is last element.
                            Negative numbers select from the end of the array.
-------------------------------------------------------------------

var newNames = names.slice(2)
console.log(newNames)
console.log(names)

----------------------------------------------------------------
        sort()  
The sort() sorts the elements of an array.
The sort() overwrites the original array.
The sort() sorts the elements as strings in alphabetical and ascending order.


Syntax
var newSort = names.sort();

Parameter	             Description
-------------------------------------

compareFunction	        Optional.

                        A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
                            function(a, b){return a-b}
                        When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

Example:

The sort function will sort 40 as a value lower than 100.

When comparing 40 and 100, sort() calls the function(40,100).

The function calculates 40-100, and returns -60 (a negative value).
-------------------------------------------------------------------


var newSort = names.sort();
console.log(newSort)
console.log(names)

----------------------------------------------------------------
        reverse()

The reverse() method reverses the order of the elements in an array.
The reverse() method overwrites the original array.


        Syntax
var newSort = names.sort();
names.reverse()

-------------------------------------------------------------------

var newSort = names.sort();
names.reverse()
console.log(newSort)

//how to do number sorting

var numbers = [50, 16, 8, 39, 25, 80, 60, 1]
console.log(numbers)
numbers.sort(function (x, y) {
    return x - y;
})
console.log(numbers)
*/

// one dimensional array
var names = ['Ronaldo 7', 'Vini jnr', 'Karim Benzima', 'Messi', 'Neymar', 'Sadio Mane', 'M. Salah', 'Haaland', 'Bell']

for (var i = 0; i < 9; i++) {
    console.log(names[i])
}


//create a function called highestScore that will 
// Receive a 1d arry called scores
//return the highest score

function highScore(scores) {
    var max = scores[0]
    for (var i = 1; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i]
        }
    }
    return max;
}
var x = [200, 290, 300, 500, 600, 99, 590, 999]
var maxScore = highScore(x)
console.log(maxScore)