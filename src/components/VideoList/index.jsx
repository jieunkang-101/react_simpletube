import React from 'react';
import VideoItem from '../VideoItem';
import styles from './index.module.css';

const VideoList = ({ videos, onVideoClick, display }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </ul>
);

export default VideoList;
