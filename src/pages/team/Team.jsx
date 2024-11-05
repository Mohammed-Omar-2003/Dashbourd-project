import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import LockOpenIcon from "@mui/icons-material/LockOpen";
function Team() {
  const them = useTheme();
  const columns = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "accass",
      headerName: "Accass",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { accass } }) => {
        return (
          <Box
            sx={{
              width: "60%",
              padding: "7px",
              mx: "auto",
              borderRadius: "5px",
              mt: "7px",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                accass === "Admin"
                  ? them.palette.primary.dark
                  : accass === "Manager"
                  ? them.palette.secondary.main
                  : "#3da58a",
            }}
          >
            {accass === "Admin" ? (
              <AdminPanelSettingsOutlinedIcon
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            ) : accass === "Manager" ? (
              <SecurityIcon sx={{ color: "#fff" }} fontSize="small" />
            ) : (
              <LockOpenIcon sx={{ color: "#fff" }} fontSize="small" />
            )}
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {accass}
            </Typography>
          </Box>
        );
      },
    },
  ];
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
        TEAM
      </Typography>
      <Typography sx={{ mb: "16px", fontSize: "16px" }}>
        Managing the Team Members
      </Typography>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}

export default Team;
