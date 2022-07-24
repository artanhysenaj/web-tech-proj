import React from "react";
import { useNavigate } from "react-router-dom";
import { BlogTitleChars } from "../BlogTitleChars/BlogTitleChars";
import ReadMore from "../shared/ReadMore/ReadMore";

const BlogPost = ({ className, ...item }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${item.id}`);
  }

  return (
    <div className={`${className} `}>
      <div
        className="pb-5 my-2 border-b-2 border-white cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <span className="text-black block w-[50px] h-[50px] rounded-full mr-[34px] bg-white">
              <BlogTitleChars data={item.title?.rendered} />
            </span>
            <h2 className="text-3xl font-medium transition-opacity duration-75 ease-in-out cursor-pointer hover:text-gray-100">
              {" "}
              {item.title?.rendered}
            </h2>
          </div>
          <h6 className="min-w-max">{item.date.split("T")[0]}</h6>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ReadMore>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            asperiores. Perspiciatis debitis placeat tenetur totam voluptatibus
            in at quam vel quas molestiae sint tempora, velit temporibus
            inventore similique delectus explicabo.
          </ReadMore>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
