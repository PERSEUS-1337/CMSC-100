import express from "express";
const app = express();
const PORT = process.env.PORT || 1337

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello!");
    console.log("Success");
})

app.get("/greeting", (req, res) => {
    res.send("Hello " + req.query.name);
    console.log("Success Name");
})

app.post("/submit", (req, res) => {
    res.send("Received a POST request from " + req.body.name);
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));