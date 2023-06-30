import { saveUser, findUser } from "./index.js";

saveUser("Ted", "Nelson", "ed.n@w3c.com", 83);
saveUser("Tim", "Berners-Lee", "timbernerslee@w3c.com", 65);
findUser('timbernerslee@w3c.com');