const VideoFrame = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <iframe
        title={props.title}
        width={props.width || "420"}
        height={props.height || "315"}
        src={"https://www.youtube.com/embed/" + props.videoId}
      ></iframe>
    </>
  );
};

export default VideoFrame;
