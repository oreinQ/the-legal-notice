const express = require("express");
const axios = require("axios");
const route = express.Router();
const mongoose = require("mongoose");
require("../model/posts");
const Posts = mongoose.model("posts");
const uri = require("../config/keys").mongoURI;
const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Article", icons : "assignment" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Case Brief", icons : "dns" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Case Comments", icons : "description" },
];

mongoose.connect(
  uri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, result) => {
    console.log("Connected...");
  }
);

route.post("/posts", (req, res) => {
  const { name, posts, title, category } = req.body;

  const newArticle = new Posts({
    name,
    title,
    category,
    posts,
  });

  const genre = genres.filter(genre =>{
    if(genre.name === category) {
      return genre
    }
  });

  newArticle.category = genre[0];

  newArticle.save();
  res.redirect("/the-legal-notice@123");
});

route.get("/posts/v1", (req, res) => {
  Posts.find({}).then((response) => {
    if (response) {
      res.json({
        status: "success",
        data: response,
      });
    } else {
      res.json({
        status: "failure",
        message: "Submit data and get",
      });
    }
  });
});

route.get("/category/v1", (req, res)=>{
  res.send(genres);
})

route.delete("/posts/detele/:_id", (req,res)=>{
  const { _id } = req.params;
  Posts.deleteOne({ _id }).then(response=>{
    console.log("Deleted");
  });
})

route.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Active Api",
  });
});

module.exports = route;
