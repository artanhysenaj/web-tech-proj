import React from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../../api/Blog/Blog";
import { BlogUser } from "../../components/BlogUser/BlogUser";
import useQuery from "../../hooks/useQuery";

const Blog = () => {
  const { blogId } = useParams();

  const { data: post, error, isLoading } = useQuery(() => getBlog(blogId));
  return (
    <div>
      <BlogUser data={post?.acf?.author} />
      <div>
        <h2 className="text-4xl font-semibold">{post?.title?.rendered}</h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}></div>
    </div>
  );
};

export default Blog;
