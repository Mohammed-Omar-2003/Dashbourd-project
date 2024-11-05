import { rows, columns } from "./data";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
function Invoices() {
  return (
    <Box style={{ height: 600, width: "98%", mx: "auto" }}>
      <Typography
        sx={{
          color: "#0288d1",
          mt: "10px",
          fontSize: "25px",
          fontWeight: "900",
        }}
      >
        INVOICES
      </Typography>
      <Typography sx={{ mb: "16px", fontSize: "16px" }}>
        List of Invoice Balances
      </Typography>
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}

export default Invoices;
