import React from "react";
import { useNavigate } from "react-router-dom";

const BlogPost = ({ className, ...item }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${item.id}`);
  }

  return (
    <div className={`${className}`}>
      <div className="pb-5 my-2 border-b-2 border-white ">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <span className="block w-[50px] h-[50px] rounded-full mr-[34px] bg-white"></span>
            <h2
              className="text-3xl font-medium transition-opacity duration-75 ease-in-out cursor-pointer hover:text-gray-100"
              onClick={handleClick}
            >
              {" "}
              {item.title?.rendered}
            </h2>
          </div>
          <h6>{item.date.split("T")[0]}</h6>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          asperiores. Perspiciatis debitis placeat tenetur totam voluptatibus in
          at quam vel quas molestiae sint tempora, velit temporibus inventore
          similique delectus explicabo.
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
