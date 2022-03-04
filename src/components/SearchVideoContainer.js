import { useState } from "react";
import VideoThumbnailList from "./VideoThumbnailList";

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

  return (
    <>
      <h1>All Videos</h1>
      <input type="search" id="searchBar" onChange={filterData} />
      <section>
        <VideoThumbnailList videos={filteredVideos} onClick={props.onClick} />
      </section>
    </>
  );
};

export default SearchVideoContainer;
