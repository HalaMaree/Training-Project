import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import * as productService from "../services/productService.ts";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import type { Product } from "../context/Product.ts";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Products({
  selectedCategory,
  searchTerm,
}: {
  selectedCategory: string;
  searchTerm: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));

  useEffect(() => {
    if (searchTerm) {
      productService.getProductsBySearchTerm(searchTerm).then((data) => {
        setProducts(data.products);
      });
    } else if (selectedCategory) {
      productService.getProductsByCategory(selectedCategory).then((data) => {
        setProducts(data.products);
      });
    } else {
      productService.getProducts().then((data) => {
        setProducts(data.products);
      });
    }
  }, [selectedCategory, searchTerm]);

  const getCardSize = () => {
    if (isXs) return { width: 160, height: 350 };
    if (isSm) return { width: 200, height: 350 };
    if (isMd) return { width: 240, height: 350 };
    return { width: 280, height: 350 };
  };

  const { width, height } = getCardSize();

  return (
    <Box sx={{ mt: 5, ml: 2, mr: 2, justifyContent: "center" }}>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          // <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard
            key={product.id}
            product={product}
            width={width}
            height={height}
          />
          // </Grid>
        ))}
      </Grid>
    </Box>
  );
}
