import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Snippet from "../components/Snippet/Snippet";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import DataBoundary from "../components/UI/DataBoundary/DataBoundary";
import useInfiniteScroll from "../hooks/use-infinite-scroll";
const HomePage = (props) => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const { snippets, loading, error, hasMore } = useInfiniteScroll({
    query: "snippets",
    perPage: 6,
    offset,
  });

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prevState) => prevState + 6);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const outlet = snippets.map((snippet, index, arr) => {
    if (arr.length === index + 1) {
      return (
        <Snippet ref={lastElementRef} key={snippet.id} snippet={snippet} />
      );
    } else return <Snippet key={snippet.id} snippet={snippet} />;
  });

  return (
    <>
      <header className="my-8 mx-2 sm:block flex flex-col items-center">
        <h1 className="text-[#fff5f5] sm:text-[1.5rem]">Errday Snippets</h1>
        <p className="text-[#fed7d7] sm:text-base text-xs mb-2">
          Create or Browse snippets you use or see everyday
        </p>
        <button
          className="px-2 py-1 sm:px-4 text-sm sm:text-base border rounded hover:bg-white hover:text-[#333]"
          onClick={() => navigate("/login")}
        >
          login
          <FontAwesomeIcon className="ml-2" icon={faSignInAlt} />
        </button>
      </header>
      <Wrapper>
        <DataBoundary loading={loading} data={snippets} error={error}>
          {outlet}
        </DataBoundary>
      </Wrapper>
    </>
  );
};

export default HomePage;
