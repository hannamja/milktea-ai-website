import classNames from "classnames/bind";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "~/layouts/components/Header/Header";
import Sidebar from "../components/Sidebar";
import styles from "./SidebarLayout.module.scss";
const cx = classNames.bind(styles);
function SidebarLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx({})}>
          <Link to="/">
            <span className={cx("link")}>Trang chủ</span>
          </Link>
          / Sản phẩm
        </div>
        <div className={cx("content")}>
          <Sidebar />
          <div className={cx("children")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
export default SidebarLayout;
