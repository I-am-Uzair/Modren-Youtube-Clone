import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
} from "../Utils/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = (video) => {
  const videoID = video.item.id.videoId;
  const videoSnippet = video.item.snippet;

  return (
    <Card
      sx={{
        width: {
          xs: "320px",
          sm:"358px",
          md: "300px",
          borderRadius: "none",
          boxShadow: 0,
        },
      }}
    >
      <Link to={videoID ? `/video/${videoID}` : demoVideoUrl}>
        <CardMedia
          image={videoSnippet?.thumbnails?.high?.url}
          alt={videoSnippet?.title}
          sx={{ width: {xs:'320px', sm:'358px', md:'300px'}, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "160px" }}>
        <Link to={videoID ? `/video/${videoID}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {videoSnippet?.title.slice(0, 30)} <br/> {videoSnippet?.title.slice(31, 60) || demoVideoTitle.slice(0, 42)}
          </Typography>
        </Link>

        <Link
          to={
            videoSnippet?.channelId
              ? `/channel/${videoSnippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {videoSnippet?.channelTitle.slice(0, 62)}
            <CheckCircle
              sx={{ fontSize: 12, color: "gray", ml: "5px", mt: "4px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
