import express from "express";
import router from "./router.js";
const app = express();

app
    .use(express.urlencoded({ extended: true }))
    .use(express.json());
    
router(app);

app
    .listen(1337);