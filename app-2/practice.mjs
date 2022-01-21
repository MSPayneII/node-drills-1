//import module
import http from "http";
// Save the result of the createServer() method in a variable named server.
const server = http.createServer((req, res) => {
  res.end("Hello, Michael\n");
});
// Call the server's listen() method with the port number 3001.
server.listen(3001, () => console.log("Server is running on port 3001"));
