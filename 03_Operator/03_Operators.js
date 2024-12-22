/*
Operators:- 

    🌟Arithmetic Operators

    📍Assignment Operators

    🌟Comparison Operators

    📍Logical Operators

    🌟Bitwise Operators

    📍Ternary Operators
*/

//Arithmetic Operators:
let number1 = 25;
let number2 = 36;
let number3 = 56;

//addition
let sum = number1 + number2 + number3;
console.log(sum);    // 117

//subtraction
let diff = Math.abs(number1 - number2);
console.log(diff);  //11

//Multiplication
let prod = number1 * number2;
console.log(prod);  //900

//Exponentiation
let x = 5;
let y = 5;

let ans = x ** 3;
console.log(ans);      // 125

ans = x ** y;
console.log(ans);      // 3125

//Division
x = 10;
y = 4;

ans = x / y;
console.log(ans);    // 2.5

//Modulus
x = 10;
y = 4;

ans = x % y;
console.log(ans);    // 2

//Increment operator
//Pre increment/decrement
x = 10;
y = 4;

console.log(++x);    // 11
console.log(--y);    // 3
console.log(x);      // 11
console.log(y);      // 3

//Post increment/decrement
let a = 10;
let b = 4;
console.log(a++);      // 10
console.log(b--);      // 4

console.log(a);        // 11
console.log(b);        // 3

// Assignment Operator
{
    let firstName = "Mayank";
    let y = 4;

    console.log(firstName);      // Mayank
    console.log(y);              // 4
}

//Camparision Operator
{
    let x = "10";
    console.log(typeof (x));        // string

    let y = 10;
    console.log(typeof (y));         // number

    console.log(x == y);            // true

    console.log(x === y);           // false
}

//Logical Operator
//and
{
    let alert1 = true;
    let alert2 = false;
    let alert3 = true;

    console.log(alert1 && alert2);    // false
    console.log(alert2 && alert3);    // false
    console.log(alert1 && alert3);    // true

    let num1 = 0;
    let num2 = 1;
    let num3 = 1;

    console.log(num1 && num2);    // 0
    console.log(num2 && num3);    // 1
    console.log(num1 && num3);    // 0
}
//or
{
    let alert1 = false;
    let alert2 = false;
    let alert3 = true;

    console.log(alert1 || alert2);    // false
    console.log(alert2 || alert3);    // true
    console.log(alert1 || alert3);    // true

    let num1 = 0;
    let num2 = 1;
    let num3 = 0;

    console.log(num1 || num2);    // 1
    console.log(num2 || num3);    // 1
    console.log(num1 || num3);    // 0
}
//Not
{
    let alert1 = false;
    let alert2;
    let alert3 = NaN;
    let mySum = 45;
    let gone = false;
    let isFirst = true;

    console.log(!alert1);      // true
    console.log(!alert2);      // true
    console.log(!alert3);      // true
    console.log(!mySum);       // false
    console.log(!gone);        // true
    console.log(!isFirst);     // false
}

//Bitwise Operator
// AND(&)
{
    let num1 = 5;
    // Binary representation of 5 : 0 1 0 1

    let num2 = 7;
    // Binary representation of 7 : 0 1 1 1

    console.log(num1 & num2);         // 5
}

//OR(|)
{
    let num1 = 5;
    // Binary representation of 5 : 0 1 0 1

    let num2 = 8;
    // Binary representation of 7 : 1 0 0 0

    console.log(num1 | num2);         // 13
}
//NOT(~)
{
    let num1 = 5;
    // Binary representation of 5 : 0 0 0 0 1 0 1

    let num2 = 8;
    // Binary representation of 7 : 0 0 0 1 0 0 0

    let num3 = -8;
    // Binary representation of -8 : 1 1 1 1 0 0 0

    console.log(~num1);    // -6
    console.log(~num2);    // -9
    console.log(~num3);    // 7
}
// XOR(^)
let num1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num1 ^ num2);     // 13

//LEFT SHIFT(<<): Multiply by 2
{
    let num1 = 5;
    // Binary representation of 5 : 0 0 0 0 1 0 1

    let num2 = 8;
    // Binary representation of 7 : 0 0 0 1 0 0 0

    console.log(num1 << 3);     // 40
    console.log(num2 << 2);     // 32
}

//Right Shift(>>) divide by 2
{
    let num1 = 5;
    // Binary representation of 5 : 0 0 0 0 1 0 1

    let num2 = 8;
    // Binary representation of 7 : 0 0 0 1 0 0 0

    console.log(num1 >> 3);     // 0
    console.log(num2 >> 2);     // 2
}

//Ternary Operator
{
    let myAge = 21;

    (myAge >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));

    // Output : Can Drive
}