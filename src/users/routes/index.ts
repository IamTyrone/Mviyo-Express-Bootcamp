/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     title:: Login
 *     summary: Login a user
 *     requestBody:
 *         required: true
 *         description: Logs in a user and returns the user's data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       email:
 *                          type: string
 *                          description: The user's email
 *                          example: john@gmail.com
 *                       password:
 *                         type: string
 *                         description: The user's email.
 *                         example: kjahs66878ujsa&989jkS#
 *     responses:
 *       200:
 *         description: Creates a user and returns the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       message:
 *                         type: string
 *                         description: Information from server response.
 *                         example: "success"
 *                       data:
 *                         type: object
 *                         properties:
 *                          first_name:
 *                              type: string
 *                              description: The user's first name.
 *                              example: Tyrone
 *                          last_name:
 *                              type: string
 *                              description: The user's last name.
 *                              example: Mguni
 *                          email:
 *                              type: string
 *                              description: The user's email
 *                              example: john@gmail.com
 *                          token:
 *                              type: string
 *                              description: Login jwt token
 *                              example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR5cm9uZTRtZ3VuaUBnbWFpbC5jb20iLCJpYXQiOjE3MDAyMzQwMDcsImV4cCI6MTczMTc3MDAwN30.vc1LYSWR_07oG8rK76RaZgkb_mVgRDwmT2LKyr3FEK4
 */

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     title:: Create User
 *     summary: Create a new user
 *     requestBody:
 *         required: true
 *         description: When creating a new user, the fields required immediately are the password, and email. The rest of the fields are not allowed. They are added after sign up.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       first_name:
 *                         type: string
 *                         description: The user's first name.
 *                         example: Tyrone
 *                       last_name:
 *                         type: string
 *                         description: The user's last name.
 *                         example: Mguni
 *                       email:
 *                          type: string
 *                          description: The user's email
 *                          example: john@gmail.com
 *     responses:
 *       201:
 *         description: Creates a user and returns the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 3
 *                       first_name:
 *                         type: string
 *                         description: The user's first name.
 *                         example: Tyrone
 *                       last_name:
 *                         type: string
 *                         description: The user's last name.
 *                         example: Mguni
 *                       email:
 *                          type: string
 *                          description: The user's email
 *                          example: john@gmail.com
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     title:: Get Users
 *     summary: Retrive all users in the system.
 *     responses:
 *       200:
 *         description: Returns a list of user json objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 3
 *                       first_name:
 *                         type: string
 *                         description: The user's first name.
 *                         example: Tyrone
 *                       last_name:
 *                         type: string
 *                         description: The user's last name.
 *                         example: Mguni
 *                       email:
 *                          type: string
 *                          description: The user's email
 *                          example: john@gmail.com
 */

/**
 * @swagger
 * /api/v1/users/:id:
 *   get:
 *     title:: Get Single Users
 *     summary: Retrive a single user from system.
 *     responses:
 *       200:
 *         description: Returns a single user from the system.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 3
 *                       firstname:
 *                         type: string
 *                         description: The user's first name.
 *                         example: Tyrone
 *                       lastName:
 *                         type: string
 *                         description: The user's last name.
 *                         example: Mguni
 *                       email:
 *                          type: string
 *                          description: The user's email
 *                          example: john@gmail.com
 */

/**
 * @swagger
 * /api/v1/users/:id:
 *   patch:
 *     title:: Update User
 *     summary: Update a user
 *     requestBody:
 *         required: true
 *         description: Updates a user and returns the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       firstName:
 *                         type: string
 *                         description: The user's first name.
 *                         example: Tyrone
 *                       lastName:
 *                         type: string
 *                         description: The user's last name.
 *                         example: Mguni
 *                       email:
 *                          type: string
 *                          description: The user's email
 *                          example: john@gmail.com
 *     responses:
 *       200:
 *         description: Updates a user and returns the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 3
 *                       firstname:
 *                         type: string
 *                         description: The user's first name.
 *                         example: Tyrone
 *                       lastName:
 *                         type: string
 *                         description: The user's last name.
 *                         example: Mguni
 *                       email:
 *                          type: string
 *                          description: The user's email
 *                          example: john@gmail.com
 */
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
