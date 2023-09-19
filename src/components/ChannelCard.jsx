import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { demoProfilePicture } from "../Utils/constants";
const ChannelCard = ({ channelDetails }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
          md: "290px",
          xs: "380px",
        },
        height:"360px",
        margin:"auto",
      // marginTop:"-20px"
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails?.snippet?.title}
            sx={{
              borderRadius: "20%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solide #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: 12, color: "gray", ml: "5px", mt: "4px" }}
            />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetails?.statistics.subscriberCount.toLocaleString()+ " "
              )}
               Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
