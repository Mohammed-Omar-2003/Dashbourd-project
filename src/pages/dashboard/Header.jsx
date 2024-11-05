import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width:"100%"
      }}
    >
      <div className=" titlt">
        <Typography
          sx={{
            color: "#0288d1",
            mt: "5px",
            fontSize: "25px",
            fontWeight: "900",
          }}
        >
          Geography
        </Typography>
        <Typography sx={{ mb: "16px", fontSize: "16px" }}>
          Simple Geography Chart
        </Typography>
      </div>
      <div className="button">
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          startIcon={<GetAppOutlinedIcon />}
        >
          Download Reports
        </Button>
      </div>
    </Box>
  );
}

export default Header;
