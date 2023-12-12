import { prisma } from "../../index";

export default async function GetAllUsers(req: any, res: any) {
  /* This route should be protected so that only super admins can view it. */
  let users;
  users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
    },
  });

  return res.json(users);
}
