import { useState } from "react";
import VideoThumbnailList from "./VideoThumbnailList";
import classes from "./SearchVideoContainer.module.css";

const SearchVideoContainer = (props) => {
  const [filteredVideos, setFilteredVideos] = useState(props.videos);
  const allVideos = props.videos;

  const filterData = (e) => {
    //console.log("search Bar", e.target.value);
    // console.log(filteredVideos);
    const searchValue = e.target.value.toLowerCase();
    if (searchValue) {
      setFilteredVideos(
        allVideos.filter((videos) => {
          return (
            videos.title.toLowerCase().includes(searchValue) ||
            videos.description.toLowerCase().includes(searchValue)
          );
        })
      );
    } else {
      setFilteredVideos(allVideos);
    }
  };

  const style = {
    flexDirection: "column",
    /* width: "200px", */
    paddingLeft: "0px",
    paddingRight: "0px",
    gap: "10px",
  };

  const thumbnailStyle = {
    width: "100%",
  };

  return (
    <>
      <h1 className={classes.searchHeader}>ALL VIDEOS</h1>
      <input
        type="search"
        id="searchBar"
        onChange={filterData}
        className={classes.searchBar}
      />
      <section className={classes.searchContainer}>
        <VideoThumbnailList
          videos={filteredVideos}
          onClick={props.onClick}
          style={style}
          imgStyle={thumbnailStyle}
        />
      </section>
    </>
  );
};

export default SearchVideoContainer;
