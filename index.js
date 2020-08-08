const express = require("express");
const app = express();
const CircularJSON = require("circular-json");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const api = require("./routes/apiRoute");
const { response } = require("express");
const axios = require("axios").default;
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "views")));

app.use("/api", api);

app.get("/", (req, res) => {
  res.render("home", { title: "Home"});
});

app.get("/blogs", (req, res) => {
  axios.get("http://localhost:5000/api/posts/new").then((response) => {
    const { data } = response;
    console.log(data.data)
    res.render("posts", { title: "Blog", data : data.data });
  });
});

app.listen(PORT, () => {
  console.log(`Serving on http://localhost:${PORT}`);
});
