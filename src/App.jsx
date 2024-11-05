import React from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./Theme";
import { Outlet } from "react-router-dom";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = React.useState("light");

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header
          setMode={setMode}
          position="position"
          open={open}
          handleDrawerOpen={handleDrawerOpen}
        />
        <SideBar
          variant="permanent"
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default MiniDrawer;
