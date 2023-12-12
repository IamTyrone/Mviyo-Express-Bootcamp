import { Router } from "express";
import CreatePost from "../controllers/createPost";
import authenticate from "../../middleware/authenticate";
import GetAllPosts from "../controllers/getAllPosts";

const router = Router();

router.post("/", authenticate, CreatePost);
router.get("/", authenticate, GetAllPosts);

export default router;
