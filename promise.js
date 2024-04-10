function generateRandomNumber() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
        if (randomNumber > 50) {
            resolve("The number is greater than 50");
        } else {
            reject("The number is less than or equal to 50");
        }
    });
}


generateRandomNumber()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error("Error:", error);
    });
