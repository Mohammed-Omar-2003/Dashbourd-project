import { styled, useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

// -----------------------------------
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const array1 = [
  { text: "Dashboard", icon: <HomeIcon />, path: "/" },
  { text: "Manage Team", icon: <GroupIcon />, path: "/team" },
  { text: "Contacts Information", icon: <ContactsIcon />, path: "/contacts" },
  { text: "Invoices Balances", icon: <ReceiptIcon />, path: "/invoices" },
];
const array2 = [
  { text: "Profile From", icon: <PersonIcon />, path: "/from" },
  { text: "Calendar", icon: <CalendarMonthIcon />, path: "/calender" },
  { text: "FAQ Page", icon: <LiveHelpIcon />, path: "/faq" },
];

const array3 = [
  { text: "Bar Chart", icon: <BarChartIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineIcon />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];
function SideBar({ open, handleDrawerClose }) {
  //   eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          my: "20px",
          transition: ".3s",
          width: open ? "70px" : "45px",
          height: open ? "70px" : "45px",
          border: "2px solid #0288d1",
        }}
        alt="Mohamed"
        src="https://th.bing.com/th/id/R.45bee75955ce6378e9b1d79ada90c1a5?rik=QWprDG8Er0aU3A&pid=ImgRaw&r=0"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? "17px" : "0px", transition: ".3s" }}
      >
        Mohamed Omar
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? "15px" : "0px",
          transition: ".3s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {array1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "light"
                        ? grey[400]
                        : grey[800]
                      : null,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "light"
                        ? grey[400]
                        : grey[800]
                      : null,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "light"
                        ? grey[400]
                        : grey[800]
                      : null,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
