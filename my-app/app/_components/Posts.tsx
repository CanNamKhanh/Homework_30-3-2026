"use client";

import { getPosts } from "@/services/post.service";
import { useEffect, useState, useRef } from "react";
import { Spinner } from "@/components/ui/spinner";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";
import AddButton from "./AddButton";

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

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const fetchPosts = async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);

      const data = await getPosts(skip);

      setPosts((prev) => {
        const newPosts = data.posts.filter(
          (p: Post) => !prev.some((prevPost) => prevPost.id === p.id),
        );

        return [...prev, ...newPosts];
      });

      if (data.posts.length < 10) {
        setHasMore(false);
      }

      setSkip((prev) => prev + 10);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchPosts();
        }
      },
      { threshold: 1 },
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [skip]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <Spinner className="scale-200" />
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-auto mt-10">
      <AddButton />

      <div className="w-full flex flex-col gap-5 text-white">
        {posts.map((post) => (
          <div
            onClick={() => router.push(`/post/${post.id}`)}
            key={post.id}
            className="text-left w-full h-50 hover:scale-102 cursor-pointer duration-300 p-5 border boder-white rounded-3xl flex flex-col justify-between"
          >
            <span className="font-bold text-xl">
              {post.id}. {post.title}
            </span>

            <span className="indent-5 line-clamp-2">{post.body}</span>

            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="flex gap-1 items-center">
                  <ThumbsUp fill="red" /> {post.reactions.likes}
                </div>

                <div className="flex gap-1 items-center">
                  <ThumbsDown fill="black" /> {post.reactions.dislikes}
                </div>
              </div>

              <div className="flex gap-1">
                {post.tags.map((tag, index) => (
                  <div className="hover:underline" key={index}>
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div
          ref={loadMoreRef}
          className="w-full flex justify-center items-center py-10"
        >
          {loadingMore && <Spinner />}
        </div>
      )}
    </div>
  );
}
