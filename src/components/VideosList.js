import VideoFrame from "./VideoFrame";

const VideosList = (props) => {
  return (
    <div>
      {props.videos.length &&
        props.videos.map((video) => {
          return <VideoFrame video={video} key={video.videoId} />;
        })}
    </div>
  );
};

export default VideosList;
