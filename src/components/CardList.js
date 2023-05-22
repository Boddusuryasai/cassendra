import React from "react";
import Card from "./Card";
import he from "he";
import useRedditData from "../Hooks/useRedditData";
import ShimmerUi from "./ShimmerUi";

const CardList = () => {
  const { data, visibleCards, loadMoreCards } = useRedditData();

  if (data.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <>
      <div className="cards flex flex-wrap justify-around mt-32 gap-4">
        {data.length > 0 &&
          data
            .slice(0, visibleCards)
            .map((data) => (
              <Card
                key={data.data.id}
                title={data?.data?.title}
                selfHtml={
                  data.data.selftext_html
                    ? he.decode(data.data.selftext_html)
                    : ""
                }
                url={data?.data?.url}
                score={data?.data?.score}
              />
            ))}
      </div>
      {data.length > 0 && visibleCards < data.length && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded block mx-auto hover:bg-blue-800 my-4"
          onClick={loadMoreCards}
        >
          Read More
        </button>
      )}
    </>
  );
};

export default CardList;
