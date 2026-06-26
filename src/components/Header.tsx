import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import Link from "@mui/material/Link";

type HeaderProps = {
  setSearchTerm?: (term: string) => void;
  page: string;
};

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
    width: "40%",
  },
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar({
  setSearchTerm,
  page,
}: HeaderProps) {
  const navigate = useNavigate();
  const { user } = useContext(AuthenticationContext);

  if (page === "home") {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "#00ADB5" }}>
          <Toolbar>
            <Link
              underline="none"
              color="inherit"
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                fontFamily: "playwrite IE, sans-serif",
                ml: 6,
                mr: 4,
              }}
              onClick={() => navigate("/")}
            >
              E-Commerce
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchTerm?.(e.target.value)}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              {user ? (
                <IconButton
                  onClick={() => navigate("/profile")}
                  color="inherit"
                >
                  <img
                    src={user.image || "/default-avatar.png"}
                    alt="profile"
                    style={{ width: 35, height: 35, borderRadius: "50%" }}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={() => navigate("/login")} color="inherit">
                  <AccountCircle />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else if (page === "login" || page === "profile") {
    return (
      <Box sx={{ flexGrow: 2 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#00ADB5", p: "16px", pl: "25px" }}
        >
          <Link
            underline="none"
            color="inherit"
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              fontFamily: "playwrite IE, sans-serif",
              ml: 6,
              mr: 4,
            }}
            onClick={() => navigate("/")}
          >
            E-Commerce
          </Link>
        </AppBar>
      </Box>
    );
  }
}
