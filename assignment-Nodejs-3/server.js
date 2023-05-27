const http = require("http");
const fs = require("fs");

const PORT = 5000;

// create the index.html file
fs.writeFile(
  "index.html",
  "<h1> Hello World </h1>\n<p> this is Royal </p>",
  (err) => {
    if (err) throw err;
    console.log("index.html file created");
  }
);

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("err loading index.html");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running `);
});
