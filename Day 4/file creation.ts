import * as fs from "fs";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFile(fileName: string) {
  fs.writeFileSync(fileName, "");
  console.log(`File "${fileName}" created successfully.`);
}

rl.question("Enter the file name: ", (fileName) => {
  createFile(fileName);
  rl.close();
});
