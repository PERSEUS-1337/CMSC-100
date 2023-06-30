import  { homepage, getUser, getVerifiedUser, saveUser, updateUser, purgeUnderage } from "./controller.js";

const router = (app) => {
    app
        .get("/", homepage)
        .get("/find-by-name", getUser)
        .get("/find-verified-users", getVerifiedUser)
        .post("/save-user", saveUser)
        .post("/edit-user-name", updateUser)
        .post("/purge-underage", purgeUnderage);
}

export default router;