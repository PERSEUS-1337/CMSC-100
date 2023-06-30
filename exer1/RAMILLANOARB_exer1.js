function validatePassword(pass1, pass2) {
    console.log("Length: " + pass1.length + " " + pass2.length + " | " + pass1 + " " + pass2);
    if (pass1.length > 7 && pass2.length > 7) {
        let capital = false;
        let number = false;
        let lower = false;
        for (i = 0; i < pass1.length; i++) {
            if (pass1[i].toUpperCase() == pass1[i] && isNaN(pass1[i])) {
                capital = true;
            }
            if (pass1[i].toLowerCase() == pass1[i] && isNaN(pass1[i])) {
                lower = true;
            } 
            if (!isNaN(pass1[i])) {
                number = true;
            }
        }
        if (capital && number && lower) {
            return (pass1 == pass2);
        } else return false;
    }
    return false;
}

function validateUser(input) {
    const neededKeys = ["firstName","lastName", "email", "age"];
    const userObj = input;
    if (neededKeys.every(key => Object.keys(userObj).includes(key))) {
        
        const isNull = Object.values(userObj).every(val => {
            if (val === "") {
                return false;
            } return true;
        });

        if (isNull) {
            if (userObj.age > 17) {
                console.log(JSON.stringify(userObj) + ": True");
                return true;
            } 
            console.log(JSON.stringify(userObj) + ": False"); 
            return false;
        }
    }
    console.log(JSON.stringify(userObj) + ": False");
    return false
}

validateUser({ firstName: "", lastName: "Russel", email: "jr@terrier.com", age: 20 });      // False
validateUser({ firstName: "Jack", age: 18 });                                               // False
validateUser({ firstName: "Jack", lastName: "Russel", email: "jr@terrier.com", age: 15 });  // False
validateUser({ firstName: "Jack", lastName: "Russel", email: "jr@terrier.com", age: 18 });  // True

console.log(validatePassword("helloworld", "hello"))        // returns false
console.log(validatePassword("hello", "hello"))             // returns false
console.log(validatePassword("hello1234", "hello1234"))     // returns false
console.log(validatePassword("Hello1234", "Hello1234"))     // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"))     // returns false
