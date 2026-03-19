import * as ra from "readline";

const rl = ra.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
  rl.question("Guess a number between 1 and 10: ", (answer) => {
    const answer1 = Number(answer);
    if (answer1 === randomNumber) {
      console.log("Congratulations! You guessed the number.");
      rl.close();
    } else {
      console.log("Wrong guess. Try again.");
      guessNumber();
    }
  });
}

guessNumber();