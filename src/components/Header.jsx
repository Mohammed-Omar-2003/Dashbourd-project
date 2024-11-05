import { styled, alpha, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function header({ open, handleDrawerOpen, setMode }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box flexGrow={1} />
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          {theme.palette.mode === "light" ? (
            <IconButton
              color="inherit"
              onClick={() => {
                setMode((e) =>
                  e === "light" ? "dark" : "light"
                );
              }}
            >
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              onClick={() => {
                setMode((e) =>
                  e === "light" ? "dark" : "light"
                );
              }}
            >
              <DarkModeIcon />
            </IconButton>
          )}
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default header;
