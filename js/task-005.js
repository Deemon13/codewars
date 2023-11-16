const greet = function (data) {
    console.log (`typeof ${data} = ${typeof data}: `)

    if (typeof data === "number" || typeof data === NaN) {
        return `hello world!`
    }

    if (typeof data === "object" || typeof data === null) {
        return `hello world!`
    }

    if (typeof data === "boolean") {
        return `hello world!`
    }

    if (typeof data === 'string') {

        return `hello world!`
    }
   
    return `hello world!`
}

console.log(greet(5));
console.log(greet('hello world!'));
console.log(greet(['hello', 'world', '!']));
console.log(greet({'hello': 'world!'}));
console.log(greet(null));
console.log(greet(5*"abc"));
console.log(greet(undefined));
console.log(greet(true));