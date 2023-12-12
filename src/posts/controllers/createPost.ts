import { prisma } from "../../index";

export default async function CreatePost(req: any, res: any) {
  type payload = { title: string; content: string; published: boolean };
  const { title, content, published } = <payload>req.body;

  if (!title || !content || typeof published !== "boolean") {
    res.status(400).json({
      error: "title, content and bublished must be present in the payload.",
    });
  }

  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: published,
      author: { connect: { id: req.user.id } },
    },
  });

  res.json(post);
}
