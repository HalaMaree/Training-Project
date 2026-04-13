import { useEffect, useState } from "react";
import * as productService from "../services/productService.ts";
import type { Category } from "../context/Category.ts";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

export default function Filters() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    productService.getProductsCategory().then((data: Category[]) => {
      setCategories(data);
      console.log("data categpryyyyyyyyy:", data);
    });
  }, []);

  return (
    <div>
      <FormControl sx={{ mt: 10, ml: 2, mr: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedCategory}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.slug} value={category.slug}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
