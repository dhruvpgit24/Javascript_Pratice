function createHelloWorld() {
    return function(...args) {
        return "hello world";
    };
}

const f = createHelloWorld();
console.log(f(''));