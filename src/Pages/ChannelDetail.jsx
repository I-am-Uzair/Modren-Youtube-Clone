import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../Utils/APIfetch";
import ChannelCard from "../components/ChannelCard";
import Videos from "../components/Videos";
import { Box } from "@mui/material";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos1, setVideos] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`).then((data) => {
      // console.log(data);
      return setChannelDetail(data.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet.id&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // console.log(channelDetail);
  // console.log(videos1);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(241,6,188,1) 0%, rgba(2,212,206,1) 0%, rgba(243,0,255,0.6000525210084033) 100%)",
            height: "300px",
            zIndex: "10",
          }}
        />
        <ChannelCard channelDetails={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos1} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
