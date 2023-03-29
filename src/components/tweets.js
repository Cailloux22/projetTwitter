import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Tweet from "./tweet";

const Tweets = () => {
  const [tweets, setTweets] = useState([1, 2, 1, 11, 1, 1, 1, 1, 1]);

  useEffect(() => {
    fetchTweets();
  }, []);
  //  FETCH
  const fetchTweets = async () => {
    await fetch("http://localhost:3001/api/v1/store", {})
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      <h1>les tweets</h1>
      {tweets.map(() => (
        <Tweet key={uuid()} />
      ))}
    </>
  );
};

export default Tweets;
