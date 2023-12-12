import { prisma } from "../../index";

export default async function GetUserData(req: any, res: any) {
  let { id } = req.params;
  id = parseInt(id);
  let user;
  user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
    },
  });

  res.json(user);
}
