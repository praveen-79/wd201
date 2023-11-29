const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let regContent = "";

const arg = require("minimist")(process.argv.slice(2));
console.log(arg.port);

fs.readFile("home.html", (err, data) => {
  //   console.log(data.toString());
  homeContent = data;
});

fs.readFile("project.html", (err, project) => {
  projectContent = project;
});

fs.readFile("registration.html", (err, reg) => {
  regContent = reg;
});

fs.readFile("home.html", (err, home) => {
  if (err) throw err;
  http
    .createServer((req, res) => {
      let url = req.url;
      if (url === "/project") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(projectContent);
        res.end();
      } else if (url == "/registration") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(regContent);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(home);
        res.end();
      }
    })
    .listen(arg.port);
});