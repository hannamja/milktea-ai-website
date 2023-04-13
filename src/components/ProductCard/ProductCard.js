import styles from "./ProductCard.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import BookBavarage from "../Modal/BookBavarage/BookBavarage";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const cx = classNames.bind(styles);

function ProductCard({ data }) {
  const [openModel, setOpenModel] = useState(false);
  const handleClickBtn = (e) => {
    e.preventDefault();
    setOpenModel(true);
  };
  const { name, price, imageSource, id } = data;
  return (
    <Link to={`/products/${id}`}>
      <Grid item>
        <div className={cx("wrapper")}>
          <div className={cx("image-wrapper")}>
            <img src={imageSource} alt="" className={cx("image")} />
            <button className={cx("heart_icon")}>
              <FavoriteIcon />
            </button>
          </div>
          <div className={cx("content")}>
            <span className={cx("name")}>{name}</span>
            <span className={cx("price")}>{price}&nbsp;đ</span>
            <button className={cx("button")} onClick={handleClickBtn}>
              <FontAwesomeIcon icon={faCartPlus} />
              <span style={{ marginLeft: "10px" }}>Đặt mua</span>
            </button>
          </div>
        </div>
      </Grid>

      <BookBavarage data={data} openModel={openModel} setOpenModel={setOpenModel} />
    </Link>
  );
}

export default ProductCard;
