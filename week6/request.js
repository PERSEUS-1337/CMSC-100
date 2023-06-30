import needle from "needle";

// needle.post(
//     "http://localhost:1337/find-subjects", {}, (err, res) => {
//         console.log(res.body);
//     }
// )

needle.post(
    "http://localhost:1337/find-subjects", { code: "CMSC123" }, (err, res) => {
        console.log(res.body);
    }
)