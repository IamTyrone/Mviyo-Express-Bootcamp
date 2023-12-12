import { Router } from "express";
import { SignUp } from "../controllers/signUp";
import Login from "../controllers/login";
import UpdateUser from "../controllers/updateUser";
import authenticate from "../../middleware/authenticate";
import GetUserData from "../controllers/getUserData";
import GetAllUsers from "../controllers/getAllUsers";

const router = Router();

router.post("/", SignUp);
router.post("/get-token", Login);
router.patch("/:id", authenticate, UpdateUser);
router.get("/:id", authenticate, GetUserData);
router.get("/", authenticate, GetAllUsers);

export default router;
