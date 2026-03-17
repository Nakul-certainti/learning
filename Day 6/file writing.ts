import * as fs from "fs";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function writeFileContent(fileName: string, content: string) {
  fs.writeFileSync(fileName, content);
  console.log(`Content written to "${fileName}" successfully.`);
}

rl.question("Enter the file name: ", (fileName) => {
  rl.question("Enter the content: ", (content) => {
    writeFileContent(fileName, content);
    rl.close();
  });
});
