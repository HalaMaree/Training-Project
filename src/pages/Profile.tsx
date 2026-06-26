import { useEffect, useState, useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { getCurrentUser } from "../services/authenticationService";
import type { User } from "../context/user";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Profile() {
  const { token } = useContext(AuthenticationContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profile, setProfile] = useState<User | null>(null);

  const { logout } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser(token).then((userData) => {
      setProfile(userData);
      console.log("USER DATA:", userData);
    });
  }, []);

  const handleLogout = async () => {
    logout();
    navigate("/login");
  };

  if (!profile)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress aria-label="Loading…" />
      </Box>
    );

  return (
    <div>
      <Header page="profile" />
      <Box
        sx={{
          mt: 15,
          ml: 10,
          mr: 10,
          justifyContent: "center",
          // background: "black",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Paper
            elevation={3}
            sx={{ width: "350px", p: 4, mt: 0, borderRadius: 3 }}
          >
            <Typography variant="h4" mb={2}>
              User Information
            </Typography>

            <Box
              component="img"
              sx={{
                height: 233,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              src={profile.image}
            />

            <Typography variant="body1">
              <strong>Username:</strong> {profile.username}
            </Typography>
            <Typography variant="body1">
              <strong>First Name:</strong> {profile.firstName}
            </Typography>
            <Typography variant="body1">
              <strong>Second Name:</strong> {profile.maidenName}
            </Typography>
            <Typography variant="body1">
              <strong>Last Name:</strong> {profile.lastName}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {profile.email}
            </Typography>
            <Typography variant="body1">
              <strong>Phone Number:</strong> {profile.phone}
            </Typography>
            <Typography variant="body1">
              <strong>Role:</strong> {profile.role}
            </Typography>
          </Paper>

          <Paper
            elevation={3}
            sx={{ width: "350px", p: 4, mt: 0, borderRadius: 3 }}
          >
            <Typography variant="h4" mb={2}>
              Personal Information
            </Typography>
            <Typography variant="body1">
              <strong>Birthdate:</strong> {profile.birthDate}
            </Typography>
            <Typography variant="body1">
              <strong>Age:</strong> {profile.age}
            </Typography>
            <Typography variant="body1">
              <strong>Gender:</strong> {profile.gender}
            </Typography>
            <Typography variant="body1">
              <strong>Blood:</strong> {profile.bloodGroup}
            </Typography>
            <Typography variant="body1">
              <strong>Eye color:</strong> {profile.eyeColor}
            </Typography>
            <Typography variant="body1">
              <strong>Height:</strong> {profile.height}
            </Typography>
            <Typography variant="body1">
              <strong>Weight:</strong> {profile.weight}
            </Typography>
          </Paper>
        </Grid>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{
              backgroundColor: "#393E46",
              px: 4,
              py: 1,
              borderRadius: 2,
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#222831",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </div>
  );
}
