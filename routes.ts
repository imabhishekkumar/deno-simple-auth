import { Router } from "https://deno.land/x/oak/mod.ts";
import { login, register } from "./controllers/authController.ts";
const router = new Router();

router
    .get("/login", login)
    .post("/register", register);

export default router;
