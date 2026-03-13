import * as fs from "fs"  ;

function readFile(filePath: string) {
 const data = fs.readFileSync(filePath, "utf-8");
 return data;
}

 export const filedata = readFile("sample.txt");
console.log(filedata);
