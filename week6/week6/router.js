import { homepage, findSubjects, findSubjectsByPost } from "./controller.js";

const router = (app) => {
  app.get("/", homepage);
  app.get("/find-subjects", findSubjects);
  app.post("/find-subjects", findSubjectsByPost);
}

export default router;