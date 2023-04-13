import styles from "./ProductDetail.module.scss";
import classNames from "classnames/bind";
import { Link, Route, Routes } from "react-router-dom";
import CategoryDes from "~/components/CategoryDes/CategoryDes";
import Subcategory from "~/components/SubCategory/Subcategory";
import Cart from "~/components/Cart/Cart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Cart as CartIcon } from "~/assets/Icons/BodyIcon";
import images from "~/assets/images/bavarage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookBavarage from "~/components/Modal/BookBavarage/BookBavarage";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);
function ProductDetail() {
  const [openModel, setOpenModel] = useState(false);
  const { id } = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/drinks', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .then((result) => {
        const getData = result.data.data.filter((i) => {
          return i.id == id
        })
        return setData(getData[0])
      })
      .catch((e) => {

      })
  }, [id])
  return (
    <>
      <div className={cx("wrapper")}>
        <span className={cx("link")}>
          <Link to="/">Trang chủ</Link> / Sản phẩm
        </span>
        <div className={cx("content")}>
          <div className={cx("img_wrapper")}>
            <img className={cx("image")} src={images.trasua} alt="" />
            <button className={cx("heart_icon")}>
              <FavoriteIcon />
            </button>
          </div>
          <div className={cx("right_content")}>
            <div className={cx("name")}>{data.name}</div>
            <div className={cx("price")}>{data.price}&nbsp;đ</div>
            <button
              className={cx("btn")}
              onClick={() => {
                setOpenModel(true);
              }}
            >
              <AddShoppingCartIcon
                style={{ width: "1.2rem", marginRight: "10px" }}
              />
              Đặt mua
            </button>
          </div>
        </div>
        <Cart />
      </div>
      {data.length === 0 ? console.log('loading') : <BookBavarage data={data} openModel={openModel} setOpenModel={setOpenModel} />}
    </>
  );
}

export default ProductDetail;
