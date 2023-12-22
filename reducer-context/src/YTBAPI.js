import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyCCrjJoFd_P4VFkgeY_uoeC3zrekTDwtI0';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';

const YTBAPI = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            part: 'snippet',
            maxResults: 5,
            key: API_KEY,
            q: 'react',
          },
        });
        setVideos(response.data.items);
      } catch (err) {
        console.error('error', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>유튜브 비디오 리스트</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <img
              src={video.snippet.thumbnails.default.url}
              alt="video Thumbnail"
            />
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YTBAPI;
