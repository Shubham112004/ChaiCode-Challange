let myArray = [1, 2, 3, 1, 2, 3]
let newArray = myArray.filter((num) => {
    return num % 2 == 0
})
console.log(newArray);