import classes from "./VideoThumbnail.module.css";
const VideoThumbnail = (props) => {
  function triggerOnClickFunc(video) {
    props.onClick(video);
  }

  return (
    <div
      className={classes.card}
      onClick={() => triggerOnClickFunc(props.video)}
    >
      <img src={props.video.thumbnailMedium} alt={props.video.title}></img>
      <h2>{props.video.title}</h2>
      <p>{props.video.description}</p>
    </div>
  );
};

export default VideoThumbnail;
