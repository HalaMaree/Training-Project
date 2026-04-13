import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import * as productService from "../services/productService";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        {products.map((product) => (
          <Grid sm={6} md={4} lg={3} xl={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
