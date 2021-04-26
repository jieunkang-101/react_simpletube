import React from 'react';
import styles from './index.module.css';

const VideoItem = ({
  video,
  video: { snippet: videoItem },
  onVideoClick,
  display,
}) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={videoItem.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{videoItem.title}</p>
          <p className={styles.channel}>{videoItem.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
