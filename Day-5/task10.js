const f1 = (num1) => {
    return num1 * num1
}

const f2 = (num2) => {
    return num2 + 10
}

const master = (func1, func2, number) => {
    const result1 = func1(number)
    const result2 = func2(result1)
    console.log(`Result after f1: ${result1} & result after f2: ${result2}`);
}

master(f1, f2, 5)