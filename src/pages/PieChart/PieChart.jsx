import Pie from "./Pie";
import { Box, Typography } from "@mui/material";
function PieChart() {
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
          Pie Chart
        </Typography>
        <Typography sx={{ mb: "16px", fontSize: "16px" }}>
          Simple Pie Chart
        </Typography>
      </div>
      <Pie />
    </Box>
  );
}

export default PieChart;
