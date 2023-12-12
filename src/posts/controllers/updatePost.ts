import { prisma } from "../../index";

export default async function UpdatePost(req: any, res: any) {
  let { id } = req.params;
  let body = { ...req.body };
  id = parseInt(id);
  try {
    const post = await prisma.post.update({
      where: { id },
      data: body,
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
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}
