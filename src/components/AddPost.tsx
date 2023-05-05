import { ChangeEvent, useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddPost = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/createPost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "vercel-postgres-demo",
      },
      body: JSON.stringify({ title, description }),
    });

    location.reload();
  };

  return (
    <div>
      <input type="text" id="title" aria-label="タイトルの入力" onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} value={title} />
      <br />
      <textarea id="description" aria-label="ディスクリプションの入力" onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} value={description} />
      <button type="button" onClick={handleAddPost} disabled={title === "" || description === ""}>
        追加
      </button>
    </div>
  );
};

export default AddPost;
