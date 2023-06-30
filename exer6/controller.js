import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/EXER6");

const userSchema = new mongoose.Schema({
    // This is for following the correct format for inputting data into the database.
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: Number, required: true},
    verified: {type: Boolean, required: true}
});

const User = mongoose.model("User", userSchema);

const homepage = (req, res) => {
    res.send("Welcome to the homepage");
}

const getUser = (req, res) => {
    console.log(">> GET request received ...");
    console.log(">> Get Users: ");
    console.log(req.query);

    // Get data from query
    const fname = req.query.firstName;
    const lname = req.query.lastName;
    console.log(">> Query: " + fname + " " + lname);

    User.find(
        { 
            firstName: fname, 
            lastName: lname 
        },
        (err, users) => {
        res.send(users);
        console.log(users);
    });
}

const getVerifiedUser = (req, res) => {
    console.log(">> GET request received ...");
    console.log(">> Get Verified Users: ");
    User.find(
        { verified: true },
        (err, users) => {
        res.send(users);
        console.log(users);
    });
}

// http://localhost:3000/save-user?firstName=Aron&lastName=Ramillano&email=abramillaon@up.edu.ph&password=1234567890&age=20&verified=true

const saveUser = (req, res) => {
    console.log(">> POST request received ...");
    console.log(">> Save User: ");
    console.log(req.body)

    // Get data from queries
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const qemail = req.body.email;
    const qpass = req.body.password;
    const qage = req.body.age;
    const qverified = req.body.verified;

    console.log("Post Body: " + fname + " " + lname + " " + qemail + " " + qage + " " + qverified);

    const newUser = new User({
        firstName: fname,
        lastName: lname,
        email: qemail,
        password: qpass,
        age: qage,
        verified: qverified 
    });

    newUser.save((err) => {
        // function called to save the const to the save function, and checks for any errors and returns if true or false
        if (!err) {
            // console.log(newUser);
            console.log(">> Saved! ");
            res.send({ success: true }); // res.body
            // res.send({success: true, data: newUser}); // res.body
        } else { 
            console.log(">> Failed! ");
            // res.send({ success: false, message: err });
            res.send({ success: false });
        }
    });
};

const updateUser = (req, res) => {
    console.log(">> POST request received ...");
    console.log(">> Save User: ");
    console.log(req.body);

    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const qemail = req.body.email;

    if (fname && lname && qemail) {
        User.updateOne(
            // First object is to filter what data to update
            { email: qemail },
            { // 2nd object is the entries in the data that needs to be updated
                firstName: fname,
                lastName: lname
            },
            (err, output) => {
                if (!err) {
                    console.log(">> Saved! ");
                    res.send({ success: true });
                } else {
                    console.log(">> Failed! ");
                    res.send({ success: false })
                }
            }
        )
    }
}

const purgeUnderage = (req, res) => {
    console.log(">> POST request received ...");
    console.log(">> Purging users... ");

    // Use $lt command to have "less than" option in the query
    User.deleteMany({ age: { $lt:18 } }, (err, output) => {
        if(!err) {
            console.log(">> Removed! ");
            res.send({ success: true });
        } else {
            console.log(">> Nothing to remove! ");
            res.send({ success: false });
        }
    })
}

export { homepage, getUser, getVerifiedUser, saveUser, updateUser, purgeUnderage}