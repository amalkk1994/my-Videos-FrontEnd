import classes from "./VideoFrame.module.css";
const VideoFrame = (props) => {
  return (
    <div
      className={classes.videoFrameMain}
      style={
        {
          /*maxWidth: props.maxWidth */
        }
      }
    >
      <iframe
        title={props.video.title}
        width={props.width || "420px"}
        height={props.height || "315px"}
        src={"https://www.youtube.com/embed/" + props.video.videoId}
      ></iframe>
      <div className={classes.videoDesc}>
        <h2>{props.video.title}</h2>
        <p>{props.video.description}</p>
      </div>
    </div>
  );
};

export default VideoFrame;
