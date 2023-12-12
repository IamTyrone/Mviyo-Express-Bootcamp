import { Router } from "express";
import CreatePost from "../controllers/createPost";
import authenticate from "../../middleware/authenticate";
import GetAllPosts from "../controllers/getAllPosts";
import UpdatePost from "../controllers/updatePost";
import GetPost from "../controllers/getPost";

const router = Router();

router.post("/", authenticate, CreatePost);
router.get("/", authenticate, GetAllPosts);
router.patch("/:id", authenticate, UpdatePost);
router.get("/:id", authenticate, GetPost);

export default router;
