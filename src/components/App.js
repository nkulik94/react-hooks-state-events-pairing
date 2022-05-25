import React, { useState } from 'react';
import Header from './Header.js';
import VoteButtons from './VoteButtons.js';
import CommentButton from './CommentButton.js';
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  const [videoObj, updateVid] = useState(video)
  const [commentsHidden, toggle] = useState(false)

  function handleVotes(updatedKey, value) {
    const newObj = {...videoObj}
    newObj[updatedKey] = value
    updateVid(newObj)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={videoObj.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header views={videoObj.views} date={videoObj.createdAt} />
      <VoteButtons upvotes={videoObj.upvotes} downvotes={videoObj.downvotes} onClickCallback={handleVotes} />
      <CommentButton hidden={commentsHidden} toggle={toggle} />
    </div>
  );
}

export default App;
