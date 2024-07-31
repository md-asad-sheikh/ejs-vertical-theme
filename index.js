const express = require("express");
const app = express();
const port = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.json({ message: "welcome to home page" });
// });

app.get("/", (req, res) => {
  res.render("home", {});
});

app.get("/home", (req, res) => {
  res.render("home2", {});
});

app.get("/chat", (req, res) => {
  res.render("chat/index", {});
});

app.get("/chat2", (req, res) => {
  res.render("chat/chat2", {});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
