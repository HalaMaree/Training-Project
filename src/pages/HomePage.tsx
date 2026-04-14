import Products from "./Products";
import Header from "../components/Header";
import Filters from "../components/Filters";
import { useState } from "react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ justifyContent: "center" }}>
      <Header setSearchTerm={setSearchTerm} />
      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Products selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </div>
  );
}
