import React from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../../api/Blog/Blog";
import { BlogUser } from "../../components/BlogUser/BlogUser";
import CodePenComponent from "../../components/CodePenComponent/CodePenComponent";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import useQuery from "../../hooks/useQuery";

const Blog = () => {
  const { blogId } = useParams();

  const { data: post, error, isLoading } = useQuery(() => getBlog(blogId));
  return (
    <LoadingBoundary
      loading={isLoading}
      loadingMessage="Loading blog data..."
      className="min-h-[300px]"
    >
      <div>
        <BlogUser data={post?.acf?.author} />
        <div>
          <h2 className="text-4xl font-semibold">{post?.title?.rendered}</h2>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
        ></div>
      </div>
      {/* <CodePenComponent /> */}
    </LoadingBoundary>
  );
};

export default Blog;
