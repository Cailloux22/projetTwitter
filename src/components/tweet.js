import React from "react";
import ReactPlayer from "react-player";

const Tweet = ({tweet}) => {
    
    
    return (
        <>
        
        {/* <ReactPlayer url="https://youtu.be/Pqe7RBOPm6s" controls={true} /> */}
            <div className="mx-auto w-3/4 border-t border-r border-l border-gray-400 p-2">{tweet.text}</div>
        </>
    )
}

export default Tweet;