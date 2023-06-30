import express from "express";
const app = express();
import uniqueString from 'unique-string';
import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const express = require("express"),
const PORT = process.env.PORT || 3000,
    fileName = "users.txt";

// http://localhost:3000/find-by-name?firstName=Tim&lastName=Berners-Lee

// express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname+'/html')))
app.get("/find-by-name", (req, res) => {
    try {
        console.log(" > Find By Name Page < ");

        let fname = req.query.firstName,
            lname = req.query.lastName,
            dataObj = {};

        console.log("Query: " + fname + " " + lname);

        const data = fs.readFileSync(fileName, "utf8").split("\n").map(item => item.split(",")).filter(item => item[0] === fname && item[1] === lname)
        
        if (data.length === 0) {
            console.log(" > User not found < ")
            res.send(dataObj)
        } else {

            dataObj = { firstName: data[0][0], lastName: data[0][1], email: data[0][2], age: data[0][3], id: data[0][4] }

            console.log(" > User found! < ")
            console.log(req.query);
            console.log(dataObj);
            res.send(dataObj);
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Interval server error'});
    }
})
app.post("/save-user", (req, res) => {
    try {
        // res.send("Received POST request");
        // res.send(req.body);
        let fname = req.body.firstName,
            lname = req.body.lastName,
            email = req.body.email,
            age = req.body.age;

            // dataObj = {};

        console.log("Query: " + fname + " " + lname + " " + email + " " + age);

        if ((fname && lname && email && age !== "") && age > 17) {
            const array = [fname, lname, email, age, uniqueString().substring(0,10)];
            // console.log("\nFile contents before appending:\n", fs.readFileSync(fileName, "utf8"));
            fs.appendFileSync(fileName, array.join(",")+ "\n");
            // console.log("\nFile contents after appending:\n", fs.readFileSync(fileName, "utf8"));
            res.send({success: true})
        } else {
            res.send({success: false})
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Interval server error'});
    }
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));