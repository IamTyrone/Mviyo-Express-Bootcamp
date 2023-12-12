import { Router } from "express";
import { SignUp } from "../controllers/signUp";
import Login from "../controllers/login";
import UpdateUser from "../controllers/updateUser";

const router = Router();

router.post("/", SignUp);
router.post("/get-token", Login);
router.post("/users/:id", UpdateUser);

export default router;
