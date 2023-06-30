import needle from "needle";
const url_submit = "http://localhost:1337/submit"

// needle.get("http://localhost:1337/greeting?name=John", (err, res) => {
//     console.log(res.body);
// })

needle.post("http://localhost:1337/submit", { name: "Resty" }, (err ,res) => {
    console.log(res.body);
})