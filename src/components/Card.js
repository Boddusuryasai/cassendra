import React, { useState } from "react";

const Card = ({ title, selfHtml, url, score }) => {
  const [isVisible, setIsvisible] = useState(false);
  return (
    <div className="card">
      <div className="card p-5 rounded-2xl w-[350px] md:w-[600px]  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
        <div>
          <h3 className=" font-bold text-[24px] ">{title}</h3>
          {isVisible && (
            <div
              className="text-sm max-width-full overflow-auto break-words whitespace-pre-wrap
          scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200"
              dangerouslySetInnerHTML={{ __html: selfHtml }}
            />
          )}

          <div className="overflow-hidden">
            <a href={url} className="truncate">
              URL: {url}
            </a>
          </div>
          <button onClick={() => setIsvisible(!isVisible)}>
            {" "}
            {isVisible ? "Read Less" : "Read More"}
          </button>

          <p className="font-semibold text-red-500">
            Score: <span className="text-blue-400">{score}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
