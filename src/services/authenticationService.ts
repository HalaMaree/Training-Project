import { URL } from "./api.ts";

// As the backend documentation

export const login = async (username: string, password: string) => {
  const res = await fetch(`${URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      expiresInMins: 30, // optional, defaults to 60
    }),
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });
  console.log(`${URL}/auth/login`);
  if (!res.ok) {
    throw new Error("Failed to login");
  }
  console.log("Login successful");

  const data = await res.json();
  // console.log("Data fetched from API:", data);
  return data;
};

export const getCurrentUser = async (token: string) => {
  const res = await fetch(`${URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
    },
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });
  if (!res.ok) {
    throw new Error("Failed to fetch current user");
  }
  const data = await res.json();
  return data;
};
