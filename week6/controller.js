import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/WEEK6");

const subjectSchema = new mongoose.Schema({
    code: String,
    description: String,
    students: Number,
    terminal: Boolean
});

const Subject = mongoose.model("Subject", subjectSchema);

const homepage = (req, res) => {
    res.send("Welcome to the homepage");
}

const findSubjects = (req, res) => {
    console.log("GET request received ...")
    console.log(req.query.code)
    Subject.find({}, (err, subjects) => {
        res.send(subjects);
    });
}

const findSubjectsByPost = (req, res) => {
    console.log("POST request received ...")
    console.log(req.body.code)
    Subject.find({}, (err, subjects) => {
        res.send(subjects);
    });
}

export { homepage, findSubjects, findSubjectsByPost }