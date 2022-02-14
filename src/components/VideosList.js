import VideoFrame from "./VideoFrame";

const VideosList = (props) => {
  return (
    <div>
      {props.videos.map((video) => {
        return (
          <VideoFrame
            title={video.title}
            videoId={video.videoId}
            key={video.videoId}
          />
        );
      })}
    </div>
  );
};

export default VideosList;
