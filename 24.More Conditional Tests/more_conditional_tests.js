"use strict";
// Equality and inequality test 1
console.log("Equality tets with strings: ", "Apple" === "Apple");
// Equality and inequality test 2
console.log("inequality tets with strings: ", "Apple" != "Orange");
// Test using the lower case function
console.log("Lower Case function test:", "HELLO".toLowerCase() === "hello");
//Numerical tests involving equality
console.log("Equality test with numbers", 26 === 26);
//Numerical tests involving inequality,
console.log("inquality test with numbers", 26 != 35);
//greater than test
console.log("Greater than test", 10 > 5);
//less than test
console.log("less than test", 5 < 10);
// greater than or equal to
console.log("Greater than and equal to tets: ", 10 >= 10);
//less than or equal to
console.log("less than or equal to test: ", 5 <= 10);
//Tests using "and" operators
console.log("And operator test: ", 5 === 5 && 10 > 5);
//Tests using "or" operators
console.log("or operator test: ", 5 === 5 || false);
//test whether an item is in a array
const fruits = ['Nashpati', 'banana', 'guava'];
console.log('Test "Nashpati" in the array:', fruits.includes("Nashpati"));
//Test whether an item is not in a array
console.log('Testing "Apple" is not an array: ', !fruits.includes('Apple'));
