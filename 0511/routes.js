const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/read-note", (req, res, next) => {
  const body = [];
  req.on("data", (note) => {
    body.push(note);
  });
  req.on("end", () => {
    const notes = Buffer.concat(body).toString();
    const noteList = notes.split("=")[1];

    res.write(`
    <html>
        <head>
            <title>Read Page</title>
        </head>
        <body>
        <h2>You added ${noteList}</h2>
        <a href="http://localhost:8000/">Home</a>
        </body>
    </html>
`);
    res.end();
    fs.writeFile(
      "views/read.html",
      `<!DOCTYPE html><html lang="en"><head><title>Read Page</title></head><body><h1>Read Note Page</h1><p>${noteList}</p></body></html>`,
      (err) => {
        if (err) throw err;
        res.statusCode = 302;
        return res.end();
      }
    );
  });
});

module.exports = router;
