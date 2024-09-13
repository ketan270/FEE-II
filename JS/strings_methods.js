//trim 
let txt = "   Hello World!   ";
console.log(txt.trim()); //Hello World!

//concat
let str1 = "Hello ";
let str2 = "World!";
console.log(str1.concat(str2)); //Hello World!

//charAt
let str = "HELLO WORLD";
console.log(str.charAt(0)); //H

//toUpperCase and toLowerCase
let text1 = "Hello World!";
console.log(text1.toUpperCase()); //HELLO WORLD!
console.log(text1.toLowerCase()); //hello world!

//indexOf
let str3 = "Please locate where 'locate' occurs!";
console.log(str3.indexOf("locate")); //7

//slice
let str4 = "Apple, Banana, Kiwi";
console.log(str4.slice(7, 13)); //Banana
console.log(str4.slice(-2));

//replace
let text2 = "Please visit Microsoft!";
console.log(text2.replace("Microsoft", "W3Schools")); //Please visit W3Schools!

//repeat
let text3 = "Hello World!";
console.log(text3.repeat(2)); //Hello World!Hello World!

//method chaining
let text4 = "Hello World!";
console.log(text4.toUpperCase().repeat(2)); //HELLO WORLD!HELLO WORLD!

//string template literals
let name = "John";
let age = 25;
let msg = `My name is ${name}. I am ${age} years old.`;
console.log(msg); //My name is John. I am 25 years old.


//methods
//push
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); //["Banana", "Orange", "Apple", "Mango", "Kiwi"]

//pop
fruits.pop();
console.log(fruits); //["Banana", "Orange", "Apple", "Mango"]

