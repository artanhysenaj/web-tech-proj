import React from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../../api/Blog/Blog";
import useQuery from "../../hooks/useQuery";

const Blog = () => {
  const { blogId } = useParams();

  const { data: post, error, isLoading } = useQuery(() => getBlog(blogId));
  console.log({ post });

  return (
    <div>
      <div>
        <h2>{post?.title?.rendered}</h2>
      </div>
    </div>
  );
};

export default Blog;
