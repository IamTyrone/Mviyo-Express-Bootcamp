import { Router } from "express";
import { SignUp } from "../controllers/signUp";
import Login from "../controllers/login";

const router = Router();

router.post("/", SignUp);
router.post("/get-token", Login);

export default router;
