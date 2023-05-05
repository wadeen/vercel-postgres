import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const FetchPosts = async (_request: NextApiRequest, response: NextApiResponse) => {
  try {
    const data = await prisma.post.findMany();

    return response.status(200).json({ data });
  } catch (error) {
    console.error("An error occurred while fetching the post:", error);
    return response.status(500).json({ error: "An internal server error occurred" });
  }
};

export default FetchPosts;
