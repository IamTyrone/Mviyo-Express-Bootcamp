import { Prisma } from "@prisma/client";
import { prisma } from "../../index";
import validatePassword from "../helpers/validatePassword";
import bcrypt from "bcrypt";

const saltRounds = 3;

export async function SignUp(req: any, res: any) {
  let body = req.body;

  console.log(req.data);

  const { email, first_name, last_name, password, password2 } = body;
  const passwordValidator = validatePassword(password, password2);

  if (!email || !first_name || !last_name || !password || !password2) {
    res.status(400).json({
      error: "email, first_name, last_name, password are all required fields.",
    });
  }

  if (passwordValidator) {
    res.status(400).json(passwordValidator);
  }

  const hash = await bcrypt.hash(password, saltRounds);

  try {
    const user = await prisma.user.create({
      data: { email: email, first_name: first_name, last_name, password: hash },
    });
    res.json(user);
  } catch (err: any) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return res.status(400).json({
          error:
            "There is a unique constraint violation, a new user cannot be created with this email",
        });
      }
    }

    console.log(err);

    res.status(500).json({ error: "Error creating user" });
  }
}
