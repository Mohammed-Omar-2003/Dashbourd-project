import GFile from "./GFile";
import { Box, Typography } from "@mui/material";
function GeographyChart() {
  return (
    <Box>
      <div>
        <Typography
          sx={{
            color: "#0288d1",
            mt: "10px",
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
      <GFile />
    </Box>
  );
}

export default GeographyChart;
