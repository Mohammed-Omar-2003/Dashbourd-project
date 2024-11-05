import Bar from "./Bar";
import { Box, Typography } from "@mui/material";
function BarChart() {
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
          Bar Chart
        </Typography>
        <Typography sx={{ mb: "16px", fontSize: "16px" }}>
          The minimum wage in Germany, France and Spain (EUR/month)
        </Typography>
      </div>
      <Bar />
    </Box>
  );
}

export default BarChart;
