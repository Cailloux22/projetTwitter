import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Tweet from "./tweet";
import { AiFillTwitterCircle } from "react-icons/ai";
import "../App.css";
const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentId, setCurrentId] = useState();
  const [initialRender, setInitialRender] = useState(true);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [img, setImg] = useState();
  // profile_image_url

  useEffect(() => {
    fetchID();
  }, []);

  //  FETCH
  const fetchID = async (recid = false) => {
    if (!recid) {
      var id = Math.floor(Math.random() * 10000);
    } else {
      id = recid;
    }
    console.log(id);
    await fetch("http://localhost:3001/api/v1/getAccountById/" + id, {})
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.apiTwitter.errors) {
          setTimeout(() => {
            fetchID(id + 1);
          }, 500);
        } else {
          setName(result.apiTwitter.data.name);
          setUsername(result.apiTwitter.data.username);
          setCurrentId(id);
          setIsLoading(false);
          setImg(result.apiTwitter.data.profile_image_url)
        }
      });
  };

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      fetchTweets();
    }
  }, [currentId]);

  const fetchTweets = async () => {
    console.log("gooo !", currentId);
    await fetch(
      "http://localhost:3001/api/v1/getTimelineByUserId/" + currentId,
      {}
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.apiTwitter.data) {
          setTweets(result.apiTwitter.data);
        } else {
          fetchID();
        }
      });
  };

  return (
    <>
      {isLoading && (
        <div className="fixed bg-gray-500 opacity-50 w-screen h-screen z-1111111">
          <div className="bg-white fixed top-1/2 left-1/2 -translate-x-2/4 p-6 -translate-y-2/4 flex flex-col items-center">
            <div className="w-full h-full flex items-center justify-center rounded-md">
              <AiFillTwitterCircle className="loader text-cyan-500" size={48} />
            </div>
          </div>
        </div>
      )}

      <h1 className="mx-auto w-3/4 py-6 flex justify-between items-center">
        <div>
        les tweets de <span className="font-bold">{name} </span> 
        <span className="text-gray-500">@{username}</span></div>
        <img className="rounded-full w-16" src={img}></img>
      </h1>
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={uuid()} />
      ))}
    </>
  );
};

export default Tweets;
