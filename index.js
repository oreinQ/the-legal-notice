const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const api = require("./routes/apiRoute");
const axios = require("axios").default;
const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "views")));

app.use("/api", api);

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/blogs", (req, res) => {
  axios.get("http://localhost:5000/api/posts/v1").then((response) => {
    const { search, category } = req.query;
    const { data } = response;
    const newData = data.data;
    if(category) {
      const json = newData.filter(event=> {
        return event.category === category;
      });
      res.render("posts", { title: "Blog" , data : json });     
    }

    if(search) {
      const json = newData.filter(event=> {
        // Use Includes for random search in string
        return event.title.toLowerCase().includes(search.toLowerCase());
      })
      res.render("posts", { title: "Blog" , data : json });
    } else {
      res.render("posts", { title: "Blog" , data : newData });
    }
  });
});

app.get("/test-ejs",(req,res)=> {
  axios.get("http://localhost:5000/api/posts/v1").then((response) => {
    const { data } = response;
    const newData = data.data;
    res.render("test", {title : "Blogs", data : newData})
  })
})

app.get("/:password", (req, res)=> {
  const { password } = req.params;
  if (password && password === "the-legal-notice@123") {
    res.render("formPosts")
  } else {
    res.json({
      status : "failure",
      message : "404 Not Found"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Serving on http://localhost:${PORT}`);
});
