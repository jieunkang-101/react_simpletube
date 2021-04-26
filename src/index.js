import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Youtube from './service/youtue-axios';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtubeAxios = new Youtube(httpClient);
// const youtubeFetch = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtubeAxios} />
  </React.StrictMode>,
  document.getElementById('root')
);
