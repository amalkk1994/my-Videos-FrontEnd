import classes from "./VideoFrame.module.css";
const VideoFrame = (props) => {
  return (
    <div className={classes.videoFrameMain}>
      <iframe
        title={props.video.title}
        width={props.width || "420"}
        height={props.height || "315"}
        src={"https://www.youtube.com/embed/" + props.video.videoId}
      ></iframe>
      <h2>{props.video.title}</h2>
      <h3>{props.video.description}</h3>
    </div>
  );
};

export default VideoFrame;
