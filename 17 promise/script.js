// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:
// • pending: initial state, neither fulfilled nor rejected.
// • fulfilled: meaning that the operation was completed successfully.
// • rejected: meaning that the operation failed.

let promise1 = new Promise((resolve, reject) => {
    console.log("hlo bhai log");
    resolve(1);
    // reject(new Error(" kuch galti ho gya bhai "));
});

function sayMyName() {
    console.log("mera nam rohit hai 😊")
}
let promise2 = new Promise((resolve, reject) => {
    setTimeout(sayMyName, 10000);
    resolve("ho gya kam");
    // reject(new Error("Nahi hua 😒"));
});

let promise3 = new Promise((resolve, reject) => {
    let ck = false;
    if (ck === true) {
        resolve("kam ho gya 😊");
    }
    else {
        reject("nahi hua kam 😒😒😒😒");
    }
});
promise3.then((message) => {
    console.log("done done done :" + message);
    return "second then ke liye return";
}).then((message) => {
    console.log("pichle bala msg :" + message);
}).catch((error) => {
    console.log("naaaahhhhhhi hua 😭😭😭😭😭😭😭😭 :" + error);
    console.error(error);
}).finally((message) => {
    console.log("mai to final hu pakka chaluga ");
})



let promise4 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, "First"); 
})

let promise5 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "Second");
})


let promise6 = new Promise((resolve, reject) => {
    // setTimeout(reject, 400, "Third");
    setTimeout(resolve, 400, "Third");
})



Promise.all([promise4, promise5,promise6])
.then((values) => {
    console.log(values) ;
}).catch((error) => {
    console.error("error:" +error);
})