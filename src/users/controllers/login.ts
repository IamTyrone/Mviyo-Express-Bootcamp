import { prisma } from "../../index";
import { validateEmail } from "../helpers/validateEmail";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Login = async (req: any, res: any) => {
  const { email, password } = req.body;

  if (validateAuth(req)) {
    return res.status(400).json(validateAuth(req));
  }

  let user;
  user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res
      .status(401)
      .json({ error: "User with this email does not exist" });
  }

  let authenticated = await bcrypt.compare(password, user.password);

  if (authenticated) {
    const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";

    const jwtPayload = {
      email,
      id: user.id,
    };
    const token = jwt.sign({ ...jwtPayload }, JWT_SECRET, {
      expiresIn: "8760h",
    });
    return res.status(200).json({
      message: "success",
      data: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        token,
      },
    });
  }

  return res.status(401).json({ error: "Invalid credentials." });
};

export default Login;

const validateAuth = (req: any) => {
  const { email, password } = req.body;

  if (!email) {
    return { error: "Email is required" };
  }
  if (!password) {
    return { error: "Password is required" };
  }

  if (!validateEmail(email)) {
    return { error: "Invalid email" };
  }

  return null;
};
