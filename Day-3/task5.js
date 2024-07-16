let score = 34
switch (true) {
    case (score > 85 && score <= 100):
        console.log('A');
        break
    case (score > 70 && score <= 85):
        console.log('B');
        break
    case (score > 55 && score <= 70):
        console.log('C');
        break
    case (score >= 35 && score <= 55):
        console.log('D');
        break
    case (score > 0 && score < 35):
        console.log('F');
        break
    default:
        console.log('Not a valid score');
}