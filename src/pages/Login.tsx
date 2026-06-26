import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import * as authenticationService from "../services/authenticationService.ts";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext.tsx";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await authenticationService.login(username, password);

      login(res.accessToken);
      navigate("/profile");
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Header page="login" />
      <Box
        sx={{
          mt: 15,

          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "100%",
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" mb={2}>
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mt: 2, backgroundColor: "#00ADB5" }}
            >
              Login
            </Button>
            <Button
              fullWidth
              variant="contained"
              type="button"
              sx={{ mt: 2, backgroundColor: "#393E46" }}
              onClick={() => navigate("/")}
            >
              Homepage
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
