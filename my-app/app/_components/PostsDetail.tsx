"use client";

import { getPostsDetail } from "@/services/post.service";
import { ArrowBigLeft, ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import "../globals.css";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";

type Post = {
  id: number;
  title: string;
  body: string;
  views: number;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  userId: number;
};

type Props = {
  id: number;
};

function PostsDetail({ id }: Props) {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPostsDetail(id);
        setPost(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <Spinner className="scale-200" />
      </div>
    );
  }

  return (
    <>
      <div
        onClick={() => router.push(`/post`)}
        className="fixed w-10 h-10 rounded-full cursor-pointer top-10 left-10 bg-white flex justify-center items-center"
      >
        <ArrowBigLeft className="hover:back-arrow-hover" />
      </div>
      <div className="bg-black text-white h-screen w-full text-[18px] flex justify-center items-center flex-col">
        <div className="flex gap-5">
          <UpdateButton id={id} title={post?.title} body={post?.body} />
          <DeleteButton id={id} />
        </div>
        <div className="w-[80%] mx-auto border rounded-3xl p-5 text-xl flex flex-col gap-5">
          <div>
            {post?.id}. {post?.title}
          </div>
          <div className="indent-5">{post?.body}</div>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <div className="flex gap-1 items-center">
                <ThumbsUp fill="red" /> {post?.reactions.likes}
              </div>
              <div className="flex gap-1 items-center">
                <ThumbsDown fill="black" /> {post?.reactions.dislikes}
              </div>
            </div>
            <div className="flex gap-1">
              {post?.tags.map((tag, index) => (
                <div className="hover:underline" key={index}>
                  #{tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsDetail;
