const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  try {
    console.log(`URL "${req.url}" has been requested.`);
    res.end("Wait ...");
  } catch (error) {
    res.end("Young man, we have a technical break.");
  }
});

server.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}.`);
});
