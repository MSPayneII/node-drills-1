import fs from "fs";

// fs.appendFile("./textmjs.txt", "Hello, Michael", (err) => {
//   err ? console.log(err) : console.log("success with mjs");
// });

// fs.readFile("./textmjs.txt", "utf8", (err, data) => {
//   err ? console.log(err) : console.log(data);
// });

fs.unlink("./updatedMJS.txt", (err) =>
  err ? console.log(err) : console.log("successful file deletion")
);

// fs.rename("./textmjs.txt", "./updatedMJS.txt", (err) => {
//   err ? console.log(err) : console.log("successful name update");
// });

// fs.writeFile("./textmjs.txt", "My name is Michael S Payne", (err) => {
//   err ? console.log(err) : console.log("successful update for mjs");
// });
