const router = require("express").Router();
const { mongoConnect } = require("../services/mongo");

router.get("/", async (req, res) => {
  const db = mongoConnect();
  const fetchedTodos = await db.collection("todos").find().toArray();
  console.log(fetchedTodos);
  const todos = fetchedTodos.map((item) => ({ ID: item._id, ...item }));
  res.render("index", { model: todos });
});

router.get("/create", (req, res) => {
  res.render("create", { model: {} });
});
router.post("/create", async (req, res) => {
  const db = mongoConnect();
  db.collection("todos")
    .insertOne({ Title: req.body.Title })
    .then(() => {
      console.log("A todo has been added");
      res.redirect("/");
    });
});

router.get("/edit/:id", async (req, res) => {
  const db = mongoConnect();
  db.collection("todos").findOne({ ID: req.params.id });
});
router.post("/edit/:id", async (req, res) => {
  const db = mongoConnect();
  db.collection("todos")
    .updateOne({ ID: req.params.id }, { $set: { Title: req.body.Title } })
    .then(() => {
      console.log("A todo has been updated");
      res.redirect("/");
    });
});

router.delete("/delete/:id", (req, res) => {
  const db = mongoConnect();
  db.collection("todos")
    .deleteOne({ ID: req.params.id })
    .then(() => {
      console.log("A todo has been deleted");
      res.redirect("/");
    });
});

module.exports = router;
