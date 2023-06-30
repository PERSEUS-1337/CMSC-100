import needle from "needle";
const save_user_url = "http://localhost:3000/save-user";
const edit_username_url = "http://localhost:3000/edit-user-name";
const purge_underage_url = "http://localhost:3000/purge-underage";

// needle
//     .post(save_user_url, {
//         firstName: "Aron",
//         lastName: "Resty",
//         email: "abramillano@up.edu.ph",
//         password: "1234567890",
//         age: 20,
//         verified: true
//     }, 
//     (err, res) => {
//         console.log(res.body); // gets res.send in const saveuser
//     }
// )

// needle.post(
//     "http://localhost:1337/find-subjects", { code: "CMSC123" }, (err, res) => {
//         console.log(res.body);
//     }
// )

// needle
//     .post(edit_username_url, {
//         firstName: "Rona",
//         lastName: "Stery",
//         email: "abramillano@up.edu.ph"
//     },
//     (err, res) => {
//         console.log(res.body);
//         }
//     )'

needle
    .post(purge_underage_url, {}, 
        (err, res) => {
            console.log(res.body);
        }
    )