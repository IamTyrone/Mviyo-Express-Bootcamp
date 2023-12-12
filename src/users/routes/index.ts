import { Router } from "express";
import { SignUp } from "../controllers/signUp";

const router = Router();

router.post("/", SignUp);

export default router;
