console.log("hello");
//alert("yoooo"); ===> How to write a comment inline.

//variables 
var b = 'Mark';

console.log(b);

var someNumber = 45;
console.log(someNumber);

//document.getElementById('someText').innerHTML = "mark lusala";

//var age = prompt('What is your age?'); 

//document.getElementById('someText').innerHTML = age;


//NUMBERS IN JAVASCRIPT

var num1 = 5.9;
console.log(5*10);
console.log(50/2);
console.log(5-3);
console.log(5+789);
console.log(23%5);

//incrementing numbers

num1 += 5;
console.log(num1);

//decrenementing numbers 
num1--;
console.log(num1);

/*FUNCTIONS 
1. create a function.
2. Call the Function.
*/

// creating
function fun(){
   console.log('This is a function');
}

// calling
fun();

/*create a function that takes in a name and says Hello and followed by your  name 

For Example

Name : "Mark"
Return : "Hello Mark"
*/

function greeting (){
    var name = prompt('What is your name?');
    var result = 'Hello ' + '' +  name; // String Concatenation
    console.log(result);
}

//greeting();

//How do functions work in functions 

// how to add 2 nubers in a function.
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result)
}

sumNumbers(23, 78);
