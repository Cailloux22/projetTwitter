import React from "react";


const Tweet = ({tweet}) => {
    
    
    return (
        <>
            <div className="mx-auto w-3/4 border-b border-r border-l border-gray-400 p-2">{tweet.text}</div>
        </>
    )
}

export default Tweet;