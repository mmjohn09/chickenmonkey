// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
// Divide the current number by 2, and check if the remainder is 0
// if (currentNumber % 2 === 0) {
// console.log(currentNumber) // Only 2, 4, 6 will appear
// }
// }

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0) {
        console.log("chicken")
    }
    else if (currentNumber % 7 === 0) {
        console.log("monkey")
    }
    else console.log(currentNumber)
}

