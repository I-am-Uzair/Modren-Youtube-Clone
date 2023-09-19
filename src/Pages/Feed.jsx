import { Box, Stack, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import React from "react";
import Videos from "../components/Videos";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../Utils/APIfetch";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      // console.log(data.items[0].id.videoId);
      // console.log(data.items)
      setVideos(data.items);
    });
    // console.log(videoData[0].id.videoId);
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "columns", md: "row" },
        backgroundColor: { sx: "#000", small: "#000" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copy-right"
          variant="body-2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          @copyright 2023 UK developers
        </Typography>
      </Box>
      <Box p={2} sx={{ height: "90vh", flex: 2, overflowY: "auto" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory}
          <span style={{ color: "#f31503", marginLeft: "12px" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
