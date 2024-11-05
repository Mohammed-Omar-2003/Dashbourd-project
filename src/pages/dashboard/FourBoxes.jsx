import React from "react";
import { Box } from "@mui/material";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
function FourBoxes() {
  return (
    <Box sx={{ display: "flex", width: "98%", gap: "5px" }}>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </Box>
  );
}

export default FourBoxes;
