const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
require("../model/posts");
const Posts = mongoose.model("posts");
const uri = require("../config/keys").mongoURI;

mongoose.connect(
  uri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, result) => {
    console.log("Connected...");
  }
);

route.post("/posts", (req, res) => {
  const { name, posts, title } = req.body;
  // const { name, posts } = data;
  const newArticle = new Posts({
    name,
    title,
    posts,
  });
  newArticle.save();
  res.redirect("/blogs");
});

route.post("/posts/v2", (req, res) => {
  const { search } = req.body;
  console.log(search);
  res.redirect('/blogs');
});

route.get("/posts/v1", (req, res) => {
  Posts.find({}).then((response) =>
    res.json({
      status: "success",
      data: response,
    })
  );
});

route.get("/", (req, res) => {
  res.json(data);
});

module.exports = route;
