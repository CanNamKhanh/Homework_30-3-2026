import axiosInstance from "@/utils/axios";

export const getPosts = async (skip: number) => {
  const posts = await axiosInstance.get(`/posts?limit=10&skip=${skip}`);
  return posts.data;
};

export const getPostsDetail = async (id: number) => {
  const postsDetail = await axiosInstance.get(`/posts/${id}`);
  return postsDetail.data;
};

export const createPost = async (data: { title: string; body: string }) => {
  const res = await axiosInstance.post("/posts/add", {
    ...data,
    userId: 1,
  });

  return res.data;
};

export const updatePost = async (
  id: number,
  data: { title: string; body: string },
) => {
  const res = await axiosInstance.put(`/posts/${id}`, data);

  return res.data;
};

export const deletePost = async (id: number) => {
  const post = await axiosInstance.delete(`/posts/${id}`);
  return post;
};
