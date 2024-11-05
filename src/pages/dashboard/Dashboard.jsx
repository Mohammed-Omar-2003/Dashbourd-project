import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import FourBoxes from "./FourBoxes";
// import Buttom from "./Buttom";
import Bar from "../BarChart/Bar";
import Line from "../LineChart/Line";
import Pie from "../PieChart/Pie";
import GFile from "../GeographyChart/GFile";

function Dashboard() {
  return (
    <Box>
      <Header />
      <FourBoxes />
      <Box
        sx={{
          width: "95",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: " 1px 3px 4px #aaa",
          mb: "40px",
        }}
      >
        <GFile />
      </Box>

      <Box
        sx={{
          width: "99%",
          gap: "5px",
          display: "flex",
          justifyContent: "space-between",
          my: "20px",
          mx: "auto",
        }}
      >
        <div
          style={{
            width: "33%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: " 1px 3px 4px #aaa",
          }}
        >
          <Pie />
        </div>
        <div
          style={{
            width: "33%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: " 1px 3px 4px #aaa",
          }}
        >
          <Bar />
        </div>
        <div
          style={{
            width: "33%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: " 1px 3px 4px #aaa",
          }}
        >
          <GFile />
        </div>
      </Box>
    </Box>
  );
}

export default Dashboard;
