import { Box, Typography } from "@mui/material";
import React from "react";
import Videos from "../components/Videos";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../Utils/APIfetch";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  console.log(searchTerm);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&part=snippet.id}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box sx={{ overflow: "auto", height: "92vh", flex: "2" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for :
        <span style={{ color: "#f31503", marginLeft: "12px" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
