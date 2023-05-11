console.log("HELLO WORLD");
var http = require("http");
const fs = require("fs");
http
  .createServer(function (req, res) {
    res.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000);
console.log("server running");
fs.appendFile("welcome.txt", "Hello Node", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(
      "\nFile Contents of file after append:",
      fs.readFileSync("welcome.txt", "utf8")
    );
  }
});

