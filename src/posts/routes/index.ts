/**
 * @swagger
 * /api/v1/posts:
 *   post:
 *     title:: Create Post
 *     summary: Create a new post
 *     requestBody:
 *         required: true
 *         description: All fields are required on this endpoint.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       title:
 *                         type: string
 *                         description: Title of the blog post
 *                         example: Why PHP is not a real language.
 *                       content:
 *                         type: string
 *                         description: The actual text content of the blog post
 *                         example: PHP is the red headed stepchild of the programming languages world because.....
 *                       published:
 *                          type: boolean
 *                          description: Shows whether or not the blog post has been published
 *                          example: false
 *                       author:
 *                          type: integer
 *                          description: ID of the author of the blog post
 *                          example: 1
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
 *                       title:
 *                         type: string
 *                         description: Title of the blog post
 *                         example: Why PHP is not a real language.
 *                       content:
 *                         type: string
 *                         description: The actual text content of the blog post
 *                         example: PHP is the red headed stepchild of the programming languages world because.....
 *                       published:
 *                          type: boolean
 *                          description: Shows whether or not the blog post has been published
 *                          example: false
 *                       author:
 *                          type: integer
 *                          description: ID of the author of the blog post
 *                          example: 1
 */

/**
 * @swagger
 * /api/v1/posts:
 *   get:
 *     title:: Get Posts
 *     summary: Retrive all posts in the system.
 *     responses:
 *       200:
 *         description: Returns a list of post json objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                       id:
 *                         type: integer
 *                         description: The post ID.
 *                         example: 3
 *                       title:
 *                         type: string
 *                         description: Title of the blog post
 *                         example: Why PHP is not a real language.
 *                       content:
 *                         type: string
 *                         description: The actual text content of the blog post
 *                         example: PHP is the red headed stepchild of the programming languages world because.....
 *                       published:
 *                          type: boolean
 *                          description: Shows whether or not the blog post has been published
 *                          example: false
 *                       author:
 *                          type: integer
 *                          description: ID of the author of the blog post
 *                          example: 1
 */

/**
 * @swagger
 * /api/v1/posts/:id:
 *   get:
 *     title:: Get Single POST
 *     summary: Retrive a single post from system.
 *     responses:
 *       200:
 *         description: Returns a single post from the system.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       id:
 *                         type: integer
 *                         description: The post ID.
 *                         example: 3
 *                       title:
 *                         type: string
 *                         description: Title of the blog post
 *                         example: Why PHP is not a real language.
 *                       content:
 *                         type: string
 *                         description: The actual text content of the blog post
 *                         example: PHP is the red headed stepchild of the programming languages world because.....
 *                       published:
 *                          type: boolean
 *                          description: Shows whether or not the blog post has been published
 *                          example: false
 *                       author:
 *                          type: integer
 *                          description: ID of the author of the blog post
 *                          example: 1
 */

/**
 * @swagger
 * /api/v1/posts/:id:
 *   patch:
 *     title:: Update post
 *     summary: Update a post
 *     requestBody:
 *         required: true
 *         description: Updates a post and returns the post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       title:
 *                         type: string
 *                         description: Title of the blog post
 *                         example: Why PHP is not a real language.
 *                       content:
 *                         type: string
 *                         description: The actual text content of the blog post
 *                         example: PHP is the red headed stepchild of the programming languages world because.....
 *                       published:
 *                          type: boolean
 *                          description: Shows whether or not the blog post has been published
 *                          example: false
 *                       author:
 *                          type: integer
 *                          description: ID of the author of the blog post
 *                          example: 1
 *     responses:
 *       200:
 *         description: Updates a posts and returns the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       id:
 *                         type: integer
 *                         description: The post ID.
 *                         example: 3
 *                       title:
 *                         type: string
 *                         description: Title of the blog post
 *                         example: Why PHP is not a real language.
 *                       content:
 *                         type: string
 *                         description: The actual text content of the blog post
 *                         example: PHP is the red headed stepchild of the programming languages world because.....
 *                       published:
 *                          type: boolean
 *                          description: Shows whether or not the blog post has been published
 *                          example: false
 *                       author:
 *                          type: integer
 *                          description: ID of the author of the blog post
 *                          example: 1
 */

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
