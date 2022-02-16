import classes from "./VideoThumbnail.module.css";
const VideoThumbnail = (props) => {
  return (
    <div className={classes.card} onClick={props.onClick}>
      <img src={props.video.thumbnailMedium} alt={props.video.title}></img>
      <h2>{props.video.title}</h2>
      <p>{props.video.description}</p>
    </div>
  );
};

export default VideoThumbnail;
