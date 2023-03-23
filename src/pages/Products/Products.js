import styles from "./Products.module.scss";
import classNames from "classnames/bind";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CategoryDes from "~/components/CategoryDes/CategoryDes";
import Subcategory from "~/components/SubCategory/Subcategory";
import Cart from "~/components/Cart/Cart";
import routes from "~/config/routes";
import ProductList from "../../components/ProductList/ProductList";

const cx = classNames.bind(styles);
function Products() {
  const { category } = useParams();
  return (
    <div className={cx("wrapper")}>
      {/* <Subcategory /> */}
      <CategoryDes />
      <ProductList type={category} />
      <Cart />
    </div>
  );
}

export default Products;
