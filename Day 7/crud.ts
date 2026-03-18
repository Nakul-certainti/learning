import * as fs from "fs";
import * as readline from "readline";

const rl =  readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFile(fileName: string) {
  fs.writeFileSync(fileName, "");
  console.log(`File "${fileName}" created successfully.`);
}

function readFile(filePath: string) {
 const data = fs.readFileSync(filePath, "utf-8");
 return data;
 console.log(data);
}

function updateFile(fileName: string, content: string) {
  if (!fs.existsSync(fileName)) {
    console.log(`File "${fileName}" does not exist.`);
    return;
  }

  fs.appendFileSync(fileName, content);
  console.log(`File "${fileName}" updated successfully. with the content: ${content}`);
}

function deleteFile(fileName: string) {
  if (!fs.existsSync(fileName)) {
    console.log(`File "${fileName}" does not exist.`);
    return;
  }

  fs.unlinkSync(fileName);
  console.log(`File "${fileName}" deleted successfully.`);
}

createFile("example.txt");
updateFile("example.txt", "hi im nakul");
console.log(readFile("example.txt"));
deleteFile("example.txt");
