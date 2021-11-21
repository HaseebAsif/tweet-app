import React from "react";

const TweetsList = ({ allTweets }) => {
  return (
    <div
      style={{
        height: "100px",
        width: "350px",
        margin: "20px 0",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkSlateGrey",
      }}
    >
      {allTweets}
    </div>
  );
};

export default TweetsList;
