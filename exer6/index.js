import express from "express";
import router from "./router.js";
const app = express(),
    PORT = 3000;

app
    .use(express.urlencoded({ extended: true }))
    .use(express.json());
    
router(app);

app
    .listen(PORT);