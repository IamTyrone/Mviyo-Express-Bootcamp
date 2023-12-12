// https://blog.logrocket.com/how-to-set-up-node-typescript-express/
// ? Tutorial for initializing Express with TypeScript.

import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./users/routes";
import postRoutes from "./posts/routes";

export const prisma = new PrismaClient();

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
