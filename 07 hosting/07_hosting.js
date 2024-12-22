// hosting can be of two type  (i) variable hosting 
//                            (ii) function hosting

// In hosting declaration of var datatype and function move in top line of code

console.log(a); // undefined (value do not move to the top only declaration)
var a=36;
console.log(a);

// console.log(b); // error (var support hosting)
let b=36;
console.log(b);

console.log(sum(5,4)); // due to hosting it will work
function sum(a , b){
    return a+b;
}
console.log(sum(3,2));

// console.log(diff(8,4)); // not support hosting this type of function declaration.
let diff=function(a,b){
    return a-b;
}
console.log(diff(8,4));

//var support hosting still we preffer const and let keyword to declare data types.
// class doesnot support hosting

//------------------------------------------------------------------------------------
//Function :- First class citizen

// function can be assign to a variable
let add=function(a,b){
    return a+b;
}
console.log(add(5,6));

//function can be passed as argument

let ck= (nm,fn)=>{
    console.log(nm);
    fn();
}
let greet=function()
{
    console.log("HELLO JEE");
}
// greet();
ck("rohit",greet);

// function can return function
function prod()
{
    return function(a,b)
    {
        console.log(a*b);
    }
}
let multiply=prod();// now multiply is a function
multiply(2,10)


//function can be used in data structures
let arr=[
    function(a,b)
    {
        console.log(a+b);
    },
    function(a,b)
    {
        console.log(a-b);
    },
    function(a,b)
    {
        console.log(a*b);
    }
]
arr[1](3,4); //-1

// can be used in object

let obj={
    Name:"Rohit",
    age:35,
    hello(){
        console.log("hello bro");
    }
}
obj.hello();
