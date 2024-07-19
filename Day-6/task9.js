let arr = [2, 5, 8, 4, 5, 6]

let initialVal = 0
let result = arr.reduce((acc, num) =>
    acc + num, initialVal
)
console.log(result);