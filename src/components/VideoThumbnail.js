import classes from "./VideoThumbnail.module.css";
const VideoThumbnail = (props) => {
  function triggerOnClickFunc(video) {
    props.onClick(video);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      className={classes.card}
      onClick={() => triggerOnClickFunc(props.video)}
      style={props.style}
    >
      <img
        src={props.video.thumbnailMedium}
        alt={props.video.title}
        style={props.imgStyle}
      ></img>
      <div className={classes.description}>
        <h2>{props.video.title}</h2>
        <p>{props.video.description}</p>
      </div>
    </div>
  );
};

export default VideoThumbnail;
