function outerFunction() {
    let name = "Babbar";
    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
let inner=outerFunction();
inner();

//A closure in JavaScript is a function that remembers and can use variables from its outer function, even after that outer function has finished running.

