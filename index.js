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