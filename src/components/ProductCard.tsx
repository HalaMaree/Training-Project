import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { Product } from "../context/Product.ts";

export default function ProductCard({
  product,
  width,
  height,
}: {
  product: Product;
  width: number;
  height: number;
}) {
  console.log(product.title);
  return (
    <Card sx={{ width: width, height: height }}>
      <CardMedia
        component="img"
        height="160"
        image={product.images[0]}
        alt={product.title}
      />
      <CardContent sx={{ height: 100 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            WebkitLineClamp: 3,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
