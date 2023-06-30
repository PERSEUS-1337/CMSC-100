import mongoose from "mongoose";

//connect to a MongoDB instance
mongoose.connect("mongodb://localhost:27017/WEEK6");

const subjectSchema = new mongoose.Schema({
    code: String,
    description: String,
    students: Number,
    terminal: Boolean
});

const Subject = mongoose.model("Subject", subjectSchema);

Subject.findOne({ code: "CMSC22" }, (err, document) => {
    if (!err) {
        console.log(document);
    }
});

Subject.find({ terminal: false }, (err, document) => {
    if (!err) {
        console.log(document);
    }
});

const newSubject = new Subject({
    code: "CMSC2",
    description: "Introduction to the Web",
    students: 50,
    terminal: false
});

newSubject.save((err) => {
    if (!err) {
        console.log("Saved!");
    }
});

Subject.findOne({ code: "CMSC191"}, (err, document) => {
    document.description = "Robot modelling",
    document.save();
});

Subject.updateOne(
    { code: "CMSC191" },
    { description: "Drone computing"},
    (err, output) => {
        if (!err) {
            console.log(output);
        }
    }
)

Subject.updateMany(
    { students: { $gt:80 } },
    { description: "has more than 80 students" },
    (err, output) => {
        console.log(output);
    }
);

Subject.deleteOne({ code: "CMSC12" }, (err, output) => {
    if(!err) {
        console.log(output);
    }
});

Subject.deleteMany({ terminal: true }, (err, output) => {
    if(!err) {
        console.log(output);
    }
})
