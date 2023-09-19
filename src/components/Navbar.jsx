import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {logo} from "../Utils/constants"
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        backgroundColor: "#000",
        position: "sticky",
        justifyContent: "space-between",
        top: 0,
        
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  );
};

export default Navbar;
