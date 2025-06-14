const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // removed extra space

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); // changed app.set to app.use

let posts = [
    {
        username: "apancollege",
        content: "I love placements"
    },
    {
        username: "Bhushan Tile",
        content: "I am working hard for my placements"
    },
    {
        username: "Siddesh ugale",
        content: "I am preparing for my placements"
    }
];

// Corrected index route
app.get("/posts", (req, res) => {
    res.render("index", { posts }); // render the EJS view and pass posts array
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

// Added a route to handle form submission


