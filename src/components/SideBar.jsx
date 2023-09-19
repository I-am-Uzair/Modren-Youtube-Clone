import React from "react";
import { categories } from "../Utils/constants";
import { Stack } from "@mui/material";


const SideBar = (props) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              backgroundColor: category.name === props.selectedCategory && "#FC1503",
              color: "white",
            }}
            key={category.name}
            onClick={() => {props.setSelectedCategory(category.name)}}
          >
            <span
              style={{
                color: category.name === props.selectedCategory ? "white" : "red",
                marginRight:"15px"
              }}
            >
              {category.icon}
            </span>
            <span style={{
                opacity: category.name === props.selectedCategory ? 1 : 0.8,
              }}>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
