import { prisma } from "../../index";

export default async function GetPost(req: any, res: any) {
  let { id } = req.params;
  id = parseInt(id);
  let post;
  post = await prisma.post.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      content: true,
      published: true,
      created_at: true,
      author_id: true,
    },
  });

  res.json(post);
}
