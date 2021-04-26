import React, { useState, useEffect } from 'react';
import VideoList from './components/VideoList';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return <VideoList videos={videos} />;
};

export default App;
