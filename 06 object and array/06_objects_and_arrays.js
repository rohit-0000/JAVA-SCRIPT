// All primitive data types consume stack memory.
// objects and arrays takes heap memory to store data and stack memory to store reference of data.

// objects are collections of key values pairs.
 
let obj={
    userName:"Rohit",
    "full Name":"Rohit",
    age:22,
    weight:70,
    height:"5feet 8inch",
    greet:function(){
        console.log("namaste bhailog");
    }
}
console.log(obj);
obj.greet();
console.log(obj.userName);
console.log(typeof(obj));

let obj2=obj;//  it means a shallow copy is created(not copy of actual data(deep copy)) i.e only reference is copied not actual data
console.log(obj2);

//array:- Contains Collection of items

let arr=[1,2,3,4,5,6];
console.log(arr[0]);
// for(let i=0;i<arr.length;i++)
// {
//     process.stdout.write(arr[i]+" "); // print without line change
// }

let brr=new Array('Love' , 1 ,true ,'*');
console.log(brr);
console.log(typeof(brr));

brr.pop();
console.log(brr);

brr.push('*');
console.log(brr);

brr.shift();//left delete
console.log(brr);

brr.unshift('LOVE');//left add
console.log(brr);
console.log(brr.slice(2));
console.log(brr.slice(2,3));

//splice
brr.splice(1,2,"❤️  ");  //after 1 index remove 2 element and add "❤️"
console.log(brr);

//map
arr=[10,20,30]; 
let getsquare=arr.map((number1,i)=>{
    console.log(number1 + " "+i);
    return number1*number1;
})
console.log(getsquare);

//filter
console.log("-----------------------------------");
arr=[22,43,46,91,28];
let getEven=arr.filter((num)=>{
    // return num%2===0;
    if(num%2==0) return true;
    else return false;
})
console.log(getEven);

//reduce
arr=[12,16,2,40,60];
let sum1=arr.reduce((acc,curr)=>{
    return acc+curr; //acc is storing acc+curr
},0);
console.log(sum1);

//sort;
arr=[200,100,20,10];
arr.sort(); //ascending
console.log(arr);

let arr1=[ 10, 100, 20, 200 ];
arr1.sort((a,b)=>b-a) //desencing
console.log(arr1);

// indexof()
arr1=[ 10, 100, 20, 200 ];
console.log(arr1.indexOf(200))

// find
arr=[10,100,20,200];
let ind=arr.find((n0)=>{return n0===900;});
console.log(arr.indexOf(ind));


// for each
let vec=[12,45,78,67];
for(let i=0;i<vec.length;i++)
{
    console.log(vec[i]);
}
arr.forEach((val,i)=>{
    console.log("Number : ",val," index : ",i);
})

// for in
for(let i in arr){
    console.log(arr[i]);
}
let Ob={
    Name:"Rohit",
    Roll:76,
    age:23
}
for(let i in Ob)
{
    console.log("key:",i," val:",Ob[i]);
}

//for of
arr=[10,20,30]
for(let i of arr)
{
    console.log(i);
}