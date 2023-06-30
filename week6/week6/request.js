import needle from "needle";

needle.post(
  "http://localhost:3000/find-subjects",
  { code: "CMSC123" },
  (err, res) => {
    console.log(res.body);
  }
)