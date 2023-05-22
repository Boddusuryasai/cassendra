import { useEffect, useState } from 'react';

const useRedditData = () => {
  const [data, setData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(10);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((res) => res.json())
      .then((data) => setData(data.data.children));
    // Title, SelfText_HTML, URL and score
  }, []);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards + 10 <= data.length ? prevVisibleCards + 10 : data.length
    );
  };

  return { data, visibleCards, loadMoreCards };
};

export default useRedditData;
