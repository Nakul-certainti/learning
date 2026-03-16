import * as fs from "fs";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function deleteFile(fileName: string) {
  if (!fs.existsSync(fileName)) {
    console.log(`File "${fileName}" does not exist.`);
    return;
  }

  fs.unlinkSync(fileName);
  console.log(`File "${fileName}" deleted successfully.`);
}

rl.question("Enter the file name: ", (fileName) => {
  deleteFile(fileName);
  rl.close();
});
