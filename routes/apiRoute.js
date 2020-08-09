const express = require("express");
const axios = require("axios");
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
  res.setHeader("Content-Type", "text/plain");
  const { name, posts, title, category } = req.body;
  // const { name, posts } = data;
  const newArticle = new Posts({
    name,
    title,
    category,
    posts,
  });
  newArticle.save();
  res.redirect("/blogs");
});

route.get("/posts/v1", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
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
