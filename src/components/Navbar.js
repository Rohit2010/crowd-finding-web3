import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#606C5D" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <img src={require("../assets/logo.png")} style={{width:"100px" , height:"90px"} }/> */}
            Crowd Funding
          </Typography>
          <Button
            color="inherit"
            style={{ fontSize: "14px", fontWeight: "900" }}
            onClick={() => navigate("/create")}
          >
            Create Campaign
          </Button>
          <Button
            color="inherit"
            style={{ fontSize: "14px", fontWeight: "900" }}
            onClick={() => navigate("/")}
          >
            All Campaigns
          </Button>
          <Button
            color="inherit"
            style={{ fontSize: "14px", fontWeight: "900" }}
            onClick={() => navigate("/aboutus")}
          >
            About Us
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
