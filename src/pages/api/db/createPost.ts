import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const CreatePost = async (request: NextApiRequest, response: NextApiResponse) => {
  const { title, description } = request.body;

  if (request.headers["x-requested-with"] !== "vercel-postgres-demo") {
    return response.status(403).json({ error: "Invalid request origin" });
  }

  try {
    const data = await prisma.post.create({
      select: {
        id: true,
        title,
        description,
      },
      data: {
        title: title,
        description: description,
      },
    });

    return response.status(200).json({ data });
  } catch (error) {
    console.error("An error occurred while creating the post:", error);
    return response.status(500).json({ error: "An internal server error occurred" });
  }
};

export default CreatePost;
