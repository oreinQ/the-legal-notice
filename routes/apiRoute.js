const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
require("../model/posts");
const Posts = mongoose.model("posts");
const uri = require("../config/keys").mongoURI;

const data = {
  name: "Chirag",
  posts: "How are you somthing , I'm fine",
};

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }, (err, result)=> {
  console.log("Connected...")
})

route.get("/posts", (req, res) => {
  // const { name , posts } = req.body;
  const { name, posts } = data;
  const newArticle = new Posts({
    name,
    posts,
  });
  newArticle.save();
  res.redirect("/");
});

route.get("/posts/new", (req, res) => {
    Posts.find({}).then((response) => res.send(
        res.send({
            status : "success",
            data : response
        })
    ))
});

route.get("/", (req, res) => {
  res.json(data);
});

module.exports = route;
