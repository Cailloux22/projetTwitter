import React from "react";
import ReactPlayer from "react-player";

const Tweet = ({tweet}) => {
    
    
    return (
        <>
        
            <div className="mx-auto w-3/4 border-t border-r border-l border-gray-300 p-2">{tweet.text}</div>
        </>
    )
}

export default Tweet;