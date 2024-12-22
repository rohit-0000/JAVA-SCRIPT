// variable:- named memory location
// Rule to define variable
// --> variable must begin with a letter, underscore (_), or dollar sign ($).
// --> Cannot use JavaScript keywords like class, return, function, etc., as variable names.
// --> Use let, const, or var for declaring variables.
// --> let and const are block-scoped (modern), while var is function-scoped (older).
// --> const is for constants that don't change their value.
// --> let and var are mutable(values can be change).
// --> var allows redeclaration of the same variable within the same scope, which can lead to unexpected behavior.
// --> we should use only let and var.



// var
var a=10;
console.log("value of var a = " + a);
var a= "rohit";
console.log("value of var a = " + a);
{
    var a="12.50";
}
console.log("value of var a = " + a);
function twice()
{
    var x=2;
    console.log("x = "+ x);
}
twice();
// console.log("x = "+ x);  // var is function-scoped

// let
let num=34;
console.log("num = " + num);
// let num="num"; //redeclaration not allowed
num="num";
console.log("num = "+num);

//const
const y=34;
console.log("y ="+y);
// y=23; // imutable



// DATA TYPE:-
//  --> primitive data type eg: number , string ,char, bigInt,symbol,null,undefined
//  --> non primitive data type

//number (+-2^53)
let NUMBER=12;
console.log("NUMBER = "+NUMBER);

// string
let STRING="Hello";
console.log("STRING = "+STRING);

//char
let CHAR='a';
console.log("CHAR = "+CHAR);

//undefined
let un;
console.log("un = "+un);

//null
let NULL=null;
console.log("NULL ="+NULL);

//bigINT
let BIGINT=123456787654321234562345432222229999999999999999999999997654678978902345678.5445;
console.log("BIGINT = "+BIGINT);

console.log(typeof(BIGINT));

//symbol
let sm=Symbol("rohit");
console.log(sm); //contain unique value and immutable
console.log(sm.description);
let smb=Symbol("rohit");
console.log(sm==smb);  //false