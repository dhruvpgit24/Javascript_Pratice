function outer() {
    function inner() {
        var a = 10;
        var b = 8;
    }
    console.log(a + b);
}
outer();
inner();