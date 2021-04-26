import React, { useEffect, useState } from 'react';
import VideoList from './components/VideoList';

const App = () => {
  const [videos, setVideos] = useState([]);
  console.log('S', videos);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&masResults=25&key=AIzaSyCUcqIsbiGkf3RcZThApa63j8wr9q4lquc',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return <VideoList videos={videos} />;
};

export default App;
