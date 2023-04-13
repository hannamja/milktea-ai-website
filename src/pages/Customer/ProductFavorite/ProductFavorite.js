import { Grid } from "@mui/material";
import classNames from "classnames/bind";
import ProductCard from "~/components/ProductCard/ProductCard";
import styles from "./ProductFavorite.module.scss";
import images from "~/assets/images/bavarage";
import { useState } from "react";
const cx = classNames.bind(styles);
function ProductFavorite() {
  const [favoriteProduct, setFavoriteProduct] = useState({
    image: images.trasua,
    name: "trasua",
    price: "40.000",
  });
  return (
    <div className={cx("wrapper")}>
      <div style={{ display: "block" }}>
        <span>Có 1 sản phẩm</span>
      </div>
      <div>
        <Grid container spacing={2} columns={10}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <Grid item lg={2} md={2.5} sm={5} xs={10}>
              <ProductCard data={favoriteProduct} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ProductFavorite;
