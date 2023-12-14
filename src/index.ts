// https://blog.logrocket.com/how-to-set-up-node-typescript-express/
// ? Tutorial for initializing Express with TypeScript.

import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./users/routes";
import postRoutes from "./posts/routes";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import cors from "cors";

export const prisma = new PrismaClient();

dotenv.config();

export const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Bootcamp Blog API",
      version: "1.0.0",
    },
  },
  apis: ["src/users/routes/*.ts", "src/posts/routes/*.ts"],
};

const openapiSpecification = swaggerJSDoc(options);

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("."));
app.use(cors());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
