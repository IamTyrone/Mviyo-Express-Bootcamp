import { Router } from "express";
import CreatePost from "../controllers/createPost";
import authenticate from "../../middleware/authenticate";
import GetAllPosts from "../controllers/getAllPosts";
import UpdatePost from "../controllers/updatePost";

const router = Router();

router.post("/", authenticate, CreatePost);
router.get("/", authenticate, GetAllPosts);
router.get("/:id", authenticate, UpdatePost);

export default router;
