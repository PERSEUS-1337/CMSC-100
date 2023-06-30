import uniqueString from "unique-string";
import fs from "fs";

const fileName = "users.txt";

function saveUser(firstName, lastName, email, age) {
    if ((firstName && lastName && email && age !== "") && age > 17) {
        const array = [firstName, lastName, email, age, uniqueString().substring(0,10)];
        console.log("\nFile contents before appending:\n", fs.readFileSync(fileName, "utf8"));
        fs.appendFileSync(fileName, array.join(",")+ "\n");
        console.log("\nFile contents after appending:\n", fs.readFileSync(fileName, "utf8"));
    };
};

function findUser(email) {


    const data = fs.readFileSync(fileName, "utf8").split("\n").map(item => item.split(",")).filter(item => item[2] === email);

    let dataArray = [];
    
    for (let i = 0; i < data.length; i++) {
        let tempObj = { first_name: data[i][0], last_name: data[i][1], age: data[i][3], id: data[i][4]}
        dataArray.push(tempObj);
    }

    const mainObj = {users: dataArray, count: data.length};

    console.log(mainObj);
    // console.log("Users: "+ mainObj.users);
    // console.log("Count: "+ mainObj.count);

}

export {
    saveUser,
    findUser
}