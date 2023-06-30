import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/EXER6");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    verified: Boolean
});

const User = mongoose.model("Subject", userSchema);

// User.findOne({ code: "CMSC22" }, (err, document) => {
//     if (!err) {
//         console.log(document);
//     }
// });

// User.find({ terminal: false }, (err, document) => {
//     if (!err) {
//         console.log(document);
//     }
// });

// const newUser = new Subject({
//     code: "CMSC2",
//     description: "Introduction to the Web",
//     students: 50,
//     terminal: false
// });

// newUser.save((err) => {
//     if (!err) {
//         console.log("Saved!");
//     }
// });

// User.findOne({ code: "CMSC191" }, (err, document) => {
//     document.description = "Robot modelling",
//     document.save();
// });

// User.updateOne(
//     { code: "CMSC191" },
//     { description: "Drone computing"},
//     (err, output) => {
//         if (!err) {
//             console.log(output);
//         }
//     }
// )

// User.updateMany(
//     { students: { $gt:80 } },
//     { description: "has more than 80 students" },
//     (err, output) => {
//         console.log(output);
//     }
// );

// User.deleteOne({ code: "CMSC12" }, (err, output) => {
//     if(!err) {
//         console.log(output);
//     }
// });

// User.deleteMany({ terminal: true }, (err, output) => {
//     if(!err) {
//         console.log(output);
//     }
// })
