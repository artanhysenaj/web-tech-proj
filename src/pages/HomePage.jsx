import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Snippet from "../components/Snippet/Snippet";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import DataBoundary from "../components/UI/DataBoundary/DataBoundary";
import useInfiniteScroll from "../hooks/use-infinite-scroll";

const HomePage = (props) => {
  
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
      <Banner />
      <Wrapper>
        <DataBoundary loading={loading} data={snippets} error={error}>
          {outlet}
        </DataBoundary>
      </Wrapper>
    </>
  );
};

export default HomePage;
