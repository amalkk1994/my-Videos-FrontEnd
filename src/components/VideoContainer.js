import { useState, useEffect } from "react";
import VideosList from "./VideosList";

const VideoContainer = () => {
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3001/api/v1/videos")
      .then((response) => response.json())
      .then((data) => {
        console.log("output", data.items[0].id.videoId);
        console.log("title", data.items[0].snippet.title);

        const videoItems = [];
        for (const item in data.items) {
          const videoItem = {
            videoId: data.items[item].id.videoId,
            title: data.items[item].snippet.title,
          };
          videoItems.push(videoItem);
        }
        console.log("VideoItems", videoItems);
        setLoading(false);
        setLoadedVideos(videoItems);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Videos</h1>
      <VideosList videos={loadedVideos} />
    </section>
  );
};

export default VideoContainer;
