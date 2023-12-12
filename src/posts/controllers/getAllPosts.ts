import { prisma } from "../../index";

export default async function GetAllPosts(req: any, res: any) {
  let posts;
  posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      published: true,
      created_at: true,
      author_id: true,
    },
  });

  return res.json(posts);
}
