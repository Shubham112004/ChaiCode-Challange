function func() {
    console.log('Shubh');
}

function firstFunc(func, num) {
    for (let i = 1; i <= num; i++) {
        func()
    }
}

firstFunc(func, 3)