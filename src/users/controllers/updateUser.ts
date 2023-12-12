import { prisma } from "../../index";

export default async function UpdateUser(req: any, res: any) {
  let { id } = req.params;
  let body = { ...req.body };
  id = parseInt(id);
  if (body.password) {
    return res.status(400).json({
      error: "You will not update passwords on this endpoint.",
    });
  }
  try {
    const user = await prisma.user.update({
      where: { id },
      data: req.body,
      select: {
        id: true,
        email: true,
        first_name: true,
        last_name: true,
      },
    });
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
}
