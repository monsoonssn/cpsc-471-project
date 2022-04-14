import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { AgentLinks, ClientLinks } from "./Links";

const drawerWidth = 240;

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loggingOut, setLoggingOut] = React.useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setLoggingOut(true);
    localStorage.removeItem("user");
    navigate(0);
  };

  return (
    <div className="app">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" noWrap component="div">
              Real Estate Database
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleLogOut}
              disabled={loggingOut}
            >
              Log out
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          {(() => {
            if (user && user.role === "agent") {
              return <AgentLinks />;
            } else {
              return <AgentLinks />;
            }
          })()}
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default App;
