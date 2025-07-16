import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let blogPosts = [];
let id = 1;

app.get("/", (req, res) => {
    res.render("index.ejs", {blogPosts});
});

app.get("/create", (req,res)=>{
    res.render("createPage.ejs");
});

app.post("/submit", (req, res)=>{
    blogPosts.push({id: id++, name: req.body.name, content: req.body.content});

    res.redirect("/");
});

app.get("/post/:id/edit", (req,res)=>{
    //tampilin data dari array ke client side
    let id = Number(req.params.id); //get id from url
    let blog = blogPosts.find(blog => blog.id === id);

    if(!blog){
        return res.status(404).send("Blog post not found!");
    }
    res.render("editPage.ejs", {blog});
})

app.post("/post/:id/edit", (req, res)=>{
    //update the data
    let id = Number(req.params.id);
    let blog = blogPosts.find(blog => blog.id === id);

    blog.name = req.body.name;
    blog.content = req.body.content;

    console.log(`update of blog post with id of ${id} success!`);
    res.redirect("/");
});

app.post("/post/:id/delete", (req, res)=>{
    let id = Number(req.params.id);

    blogPosts = blogPosts.filter(posts => posts.id !== id);

    console.log(`blog post with id of ${id} has been deleted!`);
    res.redirect("/");
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});