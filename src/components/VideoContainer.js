import { useState, useEffect } from "react";
// import VideosList from "./VideosList";
import VideoThumbnailList from "./VideoThumbnailList";
import VideoFrame from "./VideoFrame";
import classes from "./VideoContainer.module.css";

const VideoContainer = () => {
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
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
            description: data.items[item].snippet.description,
            thumbnailMedium: data.items[item].snippet.thumbnails.medium.url,
          };
          videoItems.push(videoItem);
        }
        console.log("VideoItems", videoItems);
        setLoading(false);
        setLoadedVideos(videoItems);
        setCurrentVideo(videoItems[1]);
      });
  }, []);

  function loadClickedVideo(video) {
    console.log("video::", video);
    setCurrentVideo(video);
  }

  console.log("loaded videos", loadedVideos);

  if (loading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    );
  }
  if (loadedVideos.length !== 0 && currentVideo != null) {
    return (
      <div className={classes.containerMain}>
        <section>
          <h1>My Videos</h1>
          <VideoFrame
            width="500"
            height="300"
            video={currentVideo}
            key={currentVideo.videoId}
          />
          {/* <VideosList videos={loadedVideos} /> */}
        </section>
        <aside>
          <VideoThumbnailList
            videos={loadedVideos}
            onClick={loadClickedVideo}
          />
        </aside>
      </div>
    );
  } else {
    return (
      <div>
        <p>Getting things ready...</p>
      </div>
    );
  }
};

export default VideoContainer;
