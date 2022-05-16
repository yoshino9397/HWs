const uuid = require("uuid");
const router = require("express").Router();
const { client } = require("../services/redis");

router.get("/", async (req, res) => {
  try {
    const todos = [];
    // const todos = await client.hGetAll('todos')
    // console.log(todos);

    for await (const { field, value } of client.hScanIterator("todos")) {
      todos.push({ ID: field, Title: value });
    }

    res.render("index", { model: todos });
  } catch (e) {
    console.error(e);
  }
});

router.get("/create", (req, res) => {
  res.render("create", { model: {} });
});
router.post("/create", async (req, res) => {
  await client.hSet("todos", uuid.v4(), req.body.Title);
  res.redirect("/");
});

router.get("/edit/:id", (req, res) => {
  const sql = "SELECT * FROM Todos WHERE ID = ?";
  const editId = req.params.id;
  db.get(sql, editId, (err, row) => {
    if (err) return console.error(err.message);
    res.render("edit", { model: row });
  });
});
router.post("/edit/:id", async (req, res) => {
  await client.hSet("todos", uuid.v4(), req.body.Title);
  res.redirect("/");
});

router.get("/delete:id", async (req, res) => {
  client.del("todos");
  res.redirect("/");
});

module.exports = router;
