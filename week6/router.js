import  { homepage , findSubjects , findSubjectsByPost} from "./controller.js";

const router = (app) => {
    app
        .get("/", homepage)
        .get("/find-subjects", findSubjects)
        .post("/find-subjects", findSubjectsByPost)
}

export default router;