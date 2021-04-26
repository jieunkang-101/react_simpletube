import React, { useState, useEffect } from 'react';
import VideoList from './components/VideoList';
import SearchHeader from './components/SearchHeader';
import styles from './App.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
};

export default App;
