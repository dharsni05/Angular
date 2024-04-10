function sumEvenNumbersWithDelay(numbers, isEvenCallback, delayCallback) {
    let sum = 0;
    for (let number of numbers) {
        if (isEvenCallback(number)) {
            sum += number;
        }
    }

    setTimeout(() => {
        delayCallback(sum);
    }, 1000);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(number) {
    return number % 2 === 0;
}

function displaySum(sum) {
    console.log("Sum of even numbers:", sum);
}

sumEvenNumbersWithDelay(numbers, isEven, displaySum);
  