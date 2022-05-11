import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(`
    <html>
        <head>
            <title>First Page</title>
        </head>
        <body>
          <h1>Hello Node!</h1>
          <a href='http://localhost:8000/read-message'>Read Message</a>
          <br/>
          <a href='http://localhost:8000/write-message'>Write Message</a>
        </body>
    </html>
`);
    res.end();
  }

  if (url === "/read-message" && method === "POST") {
    const body = [];
    req.on("data", (message) => {
      body.push(message);
    });
    req.on("end", () => {
      const messages = Buffer.concat(body).toString();
      const messagesList = messages.split("=")[1];

      res.write(`
    <html>
        <head>
            <title>First Page</title>
        </head>
        <body>
        <h2>${messagesList}</h2>
        </body>
    </html>
`);
      res.end();
      fs.writeFile("message.txt", messagesList, (err) => {
        if (err) throw err;
        res.statusCode = 302;
        return res.end();
      });
    });
  }

  if (url === "/write-message") {
    res.write(`
            <html>
                <head>
                    <title>First Page</title>
                </head>
                <body>
                    <form action="/read-message" method="POST">
                        <input type="text" name="message" />
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);
    res.end();
  }
});

server.listen(8000);
