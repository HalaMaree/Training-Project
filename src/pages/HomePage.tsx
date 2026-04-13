import Products from "./Products";
import Header from "../components/Header";
import Filters from "../components/Filters";
// import { useState } from "react";

export default function HomePage() {
  return (
    <div style={{ justifyContent: "center" }}>
      <Header />
      <Filters />
      <Products />
    </div>
  );
}
