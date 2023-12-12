import jwt from "jsonwebtoken";

const authenticate = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "invalid token" });
  }
};

export default authenticate;
