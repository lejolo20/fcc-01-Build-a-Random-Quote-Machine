import React, { useEffect, useState } from "react";

const QuoteBox = () => {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(false);

  const fecthApi = async () => {
    setLoading(true);
    const data = await fetch(
      "https://api.api-ninjas.com/v1/quotes?category=happiness",
      {
        headers: {
          "X-Api-Key": "2yuByBM/LkAMHUj48+1KCQ==414Cb7b2srY1uiED",
        },
      }
    );
    const res = await data.json();
    setLoading(false);
    return setApiData(res);
  };

  useEffect(() => {
    fecthApi();
  }, []);

  console.log(apiData);

  return (
    <>
      {loading ? (
        <div className="loading">"Loading..."</div>
      ) : (
        <main id="quote-box">
          {<p id="text">"{loading ? "" : apiData?.["0"].quote}"</p>}
          <div id="author">- {loading ? "" : apiData?.["0"].author} -</div>
          <button id="tweet-quote">
            <a href="twitter.com/intent/tweet">Twitter</a>
          </button>
          <button id="new-quote" onClick={fecthApi}>
            New Quote
          </button>
        </main>
      )}
    </>
  );
};

export default QuoteBox;
