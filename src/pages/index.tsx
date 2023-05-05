import AddPost from "@/components/AddPost";
import { Posts } from "@/components/Posts";
import { Post } from "@/types/PostType";
import { NextPage } from "next";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/fetchPosts`);
  const { data: posts } = await res.json();

  return {
    props: { posts },
  };
};

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <main>
      <AddPost />
      <Posts posts={posts} />
    </main>
  );
};

export default Home;
