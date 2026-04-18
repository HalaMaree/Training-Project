import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { getCurrentUser } from "../services/authenticationService";
import { useState } from "react";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProtectedRoute({ children }: any) {
  const [profile, setProfile] = useState(null);
  const { token } = useContext(AuthenticationContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      getCurrentUser(token)
        .then((userData) => {
          setProfile(userData);
          console.log("ProtectedRoute profile:", profile);
          console.log("USER from protected route:", userData);
        })
        .catch(() => {
          setProfile(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
    }
  }, [token]);

  if (loading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress aria-label="Loading…" />
      </Box>
    );
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
