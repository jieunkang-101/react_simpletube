import React from 'react';
import styles from './index.module.css';

const VideoItem = ({ video: { snippet: videoItem } }) => (
  <li className={styles.video}>
    <img
      className={styles.thumbnail}
      src={videoItem.thumbnails.medium.url}
      alt="video thumnail"
    />
    <div>
      <p className={styles.title}>{videoItem.title}</p>
      <p className={styles.channel}>{videoItem.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
