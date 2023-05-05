import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const DeletePost = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.body;
  if (request.headers["x-requested-with"] !== "vercel-postgres-demo") {
    return response.status(403).json({ error: "Invalid request origin" });
  }

  try {
    const data = await prisma.post.delete({
      where: {
        id: parseInt(id, 10),
      },
    });

    return response.status(200).json({ data });
  } catch (error) {
    console.error("An error occurred while deleting the post:", error);
    return response.status(500).json({ error: "An internal server error occurred" });
  }
};

export default DeletePost;
