import VideoThumbnail from "./VideoThumbnail";

const VideoThumbnailList = (props) => {
  return (
    <>
      {props.videos.length > 1 &&
        props.videos.map((video) => {
          return (
            <VideoThumbnail
              video={video}
              onClick={props.onClick}
              key={video.videoId}
            />
          );
        })}
    </>
  );
};

export default VideoThumbnailList;
