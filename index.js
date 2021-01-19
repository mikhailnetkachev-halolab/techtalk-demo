const fs = require("fs");
// const http = require("http");
const path = require("path");
const PORT = 3000;

// const server = http.createServer((req, res) => {
//   try {
//     if (req.method === "GET") {
//       fs.readFile(path.resolve(__dirname, "views", "index.html"), (error, data) => {
//         if (error) throw error;

//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//     }
    
//     if (req.method === "POST") {
//       const body = [];

//       req.on("data", (data) => {
//         body.push(Buffer.from(data));
//       });
//       req.on("end", () => {
//         console.log(body);

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(body.toString()));
//       });
//     }
//   } catch (error) {
//     res.end("Young man, we have a technical break.");
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server has been started on port ${PORT}.`);
// });

const express = require('express');
const app = express();

app.get("/", (req, res) => {
  fs.readFile(path.resolve(__dirname, "views", "index.html"), (error, data) => {
    if (error) throw error;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

app.post("/", (req, res) => {
  const body = [];

  req.on("data", (data) => {
    body.push(Buffer.from(data));
  });
  req.on("end", () => {
    console.log(body);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(body.toString()));
  });
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}.`);
});
