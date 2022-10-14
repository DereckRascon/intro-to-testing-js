// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === 'Jane') {
//         return 'Hello ' + input + '!';
//     } else if (input === 'Pat') {
//         return 'Hello ' + input + '!';
//     } else if (input === 'Alex') {
//         return 'Hello ' + input + '!';
//     } else if (input === undefined) {
//         return 'Hello, World!';
//     } else if (input === true) {
//         return 'Hello, World!';
//     } else if (input === false){
//         return 'Hello, World!';
//     }
// }

function sayHello(input){
    if (typeof input !== "string" || input === "" || input === 5){
        return 'Hello, World!';
    } else {
        return 'Hello ' + input + '!';
    }
}


function isFive(num) {
    if (num === 5) {
    return true;
    }
    return typeof num === "boolean"
}


function isEven(num){
    if (num % 2 === 0){
        return true;
    }
        return typeof num === "boolean";


}
