import React, { useState } from 'react';
import Header from './Header.js';
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header />
    </div>
  );
}

export default App;
