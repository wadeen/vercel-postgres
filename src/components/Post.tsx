import React from "react";
import { Post } from "@/types/PostType";
import { useRouter } from "next/router";

export const PostRecord: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/deletePost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "vercel-postgres-demo",
      },
      body: JSON.stringify({ id: event.currentTarget.value }),
    });

    router.reload();
  };

  return (
    <div>
      <div>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.description}</p>
      </div>

      <button type="button" value={post.id} onClick={handleDelete}>
        🗑️ 削除
      </button>
    </div>
  );
};
