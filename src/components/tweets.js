import React, { useState } from "react";
import uuid from "react-uuid";
import Tweet from "./tweet";

const Tweets = () => {
  const [tweets, setTweets] = useState([1, 2, 1, 11, 1, 1, 1, 1, 1]);

  return (
    <>
        <h1>les tweets</h1>
        {tweets.map(() => (
            <Tweet  key={uuid()} />
        ))}
    </>
  );
};

export default Tweets;
