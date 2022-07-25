import React from "react";
import { getBlog, getBlogPosts } from "../../api/Blog/Blog";
import BlogPost from "../../components/BlogPost/BlogPost";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import PostsList from "../../components/shared/PostsList/PostsList";
import useQuery from "../../hooks/useQuery";

const BlogPage = (props) => {
  const { data: posts, error, isLoading } = useQuery(getBlogPosts);

  return (
    <div className="p-2 lg:p-0">
      <LoadingBoundary
        loading={isLoading}
        className="min-h-[250px]"
        loadingMessage="Loading blogs..."
      >
        {posts?.length && (
          <PostsList
            items={posts}
            render={(item, idx) => (
              <BlogPost className={"p-[50px]"} {...item} key={`${idx}-post`} />
            )}
          />
        )}
      </LoadingBoundary>
    </div>
  );
};

export default BlogPage;
