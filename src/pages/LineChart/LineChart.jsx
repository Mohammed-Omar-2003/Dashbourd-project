import Line from "./Line";
import { Box, Typography } from "@mui/material";
function LineChart() {
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
          Line Chart
        </Typography>
        <Typography sx={{ mb: "16px", fontSize: "16px" }}>
          Simple Line Chart
        </Typography>
      </div>
      <Line />
    </Box>
  );
}

export default LineChart;
