//Async-await : we can provide synchronous behavior to Asynchronous code
// async function always returning a promise.
// we can handle promises with the help of async-await
async function getData1() {
    setTimeout(
        function () {
            console.log("i am inside set timeout block");
        }, 3000
    );
}

getData1();

//fetch API : it provide interface for fetching resources.
async function getData() {

    // get request — async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts ');
    // parse json— async
       let data = await response.json();

    console. log( data);
    // console.log(response);
}
getData();
// scenario:
// prepare url / api endpoint —> sync
//await // fetch data - > network call —> async
// process data -> sync  