// function : it is a block of code perform specific task.

//function definition
function sayMyName()
{
    console.log('Rohit');
}
function getAverage(x,y)
{
    console.log("average = "+(x+y)/2);
}
function getSum(x,y,z)
{
    return x+y+z;
}
function getFullname(firstName,lastName)
{
    return (firstName+" "+lastName);
}
let getSquare=function(x){
    return x**2;
}

let getPower=(x,y)=>{
    return (x**y);
}
//------------------------------------------------------------------------
// function call
sayMyName();
getAverage(3,4);
let add=getSum(3,4,3);
console.log(add);
console.log(getFullname("Vineet","hiramath"));
console.log(getSquare(5));
console.log(getPower(2,10));