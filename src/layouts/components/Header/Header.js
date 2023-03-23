import classnames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoList from "~/assets/images/logo";
import ModalSignin from "~/components/Modal/ModalSignin/ModalSignin";
import { useSelector } from "react-redux";
import Search from "../../../components/Search/Search";
// import Search from "/Search";
import styles from "./Header.module.scss";
import Message from "./Message/Message";
import Account from "./Account/Account";
import Logo from "./Logo/Logo";
const cx = classnames.bind(styles);

function Header() {
  const [openModel, setOpenModel] = useState(false);
  const currenUser = useSelector((state) => state.user.current);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("content_left")}>
          <Link to="/" style={{ display: "block", height: "100%" }}>
            <Logo />
          </Link>
          <Search />
        </div>
        <div className={cx("content_right")}>
          <div className={cx("delevery")}>
            <img
              src={logoList.deleveryLogo}
              alt="deleverylogo"
              className={cx("delevery_logo")}
            />
            <div className={cx("delevery_menu")}>
              <div className={cx("delevery_menu_top")}>Giao hàng</div>
              <div className={cx("delevery_menu_bottom")}>
                Ho Chi Minh City, Viet Nam
              </div>
            </div>
          </div>
          {/* //icon và menu mesage // */}
          <Message />
          {/*  */}
          {/* Account */}
          <Account currenUser={currenUser} setOpenModel={setOpenModel} />
        </div>
      </div>
      {/* modal */}
      <ModalSignin openModel={openModel} setOpenModel={setOpenModel} />
    </div>
  );
}

export default Header;
