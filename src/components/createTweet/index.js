import React, { useState, useEffect } from "react";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import "./CreateTweet.css";
import TweetsList from "../tweetsList";
const CreateTweet = () => {
  const [isTweet, setTweet] = useState("");
  const [value, setValue] = useState(
    JSON.parse(window.localStorage.getItem("All Tweet")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue([...value, { yourTweet: isTweet }]);
  };
  useEffect(() => {
    localStorage.setItem("All Tweet", JSON.stringify(value));
  }, [value]);
  return (
    <div>
      <Paper className="text-area-container" elevation={3}>
        <form onSubmit={handleSubmit} className="text-area-inner-container">
          <TextField
            multiline
            rows="4"
            placeholder="What is in Your Mind..."
            className="textfield"
            onChange={(e) => setTweet(e.target.value)}
            inputProps={{ style: { fontFamily: "Arial", color: "white" } }}
          ></TextField>
          <Button
            size="small"
            type="submit"
            variant="contained"
            onSubmit={handleSubmit}
          >
            Tweet
          </Button>
        </form>
        {value.length !== 0 ? (
          value.map((data, i) => (
            <TweetsList key={i} allTweets={data.yourTweet} />
          ))
        ) : (
          <h1 style={{ color: "white" }}>No Comments</h1>
        )}
      </Paper>
    </div>
  );
};

export default CreateTweet;
