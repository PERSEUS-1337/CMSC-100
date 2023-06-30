import needle from "needle";
const url_submit = "http://localhost:3000/save-user";
const url_find = "http://localhost:3000/find-by-name?firstName=Tim&lastName=Berners-Lee";

needle
    .get(url_find, (err ,res) => {
        // Had to use link itself to use the get function properly with objects as the get method does not "use" the object unlike in post
        console.log(res.body);
    })

needle 
    .post(url_submit, {firstName: "Tim", lastName: "Berners-Lee", email: "timbernerslee@w3c.com", age: 69}, (err ,res) => {
        console.log(res.body);
    })

