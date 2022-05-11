const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});
app.get("/create-note", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "create.html"));
});
app.get("/read-note", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "read.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(8000, () => {
  console.log("Server is running!");
});
