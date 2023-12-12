import { Router } from "express";
import CreatePost from "../controllers/createPost";
import authenticate from "../../middleware/authenticate";

const router = Router();

router.post("/", authenticate, CreatePost);

export default router;
