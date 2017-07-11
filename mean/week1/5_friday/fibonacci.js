function fib(n) {
    function nacci(n) {
        let a = 0;
        let b = 1;
        let f = 1;
        n = n + 1;
        for (let i = 2; i <= n; i++){
            f = a + b;
            a = b;
            b = f;
        }
        console.log(f);
        return f
    }
    return nacci;
}

let fibCounter = fib();
fibCounter(0) // should console.log "1"
fibCounter(1) // should console.log "1"
fibCounter(2) // should console.log "2"
fibCounter(3) // should console.log "3"
fibCounter(4) // should console.log "5"
fibCounter(5) // should console.log "8"
