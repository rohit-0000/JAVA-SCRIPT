
let count=0;
let butt=document.getElementsByTagName('button');
let para=document.getElementsByTagName('p');

document.addEventListener('click',()=>{
    count++;
    para[0].innerHTML=`You have clicked ${count} times 😊`;
    // para[0].textContent=`You have clicked ${count} times 😊`;
    console.log(`You have clicked ${count} times 😊`);
});
