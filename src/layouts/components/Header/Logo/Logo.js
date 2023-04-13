import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoList from "~/assets/images/logo";
// import Search from "/Search";
import styles from "./Logo.module.scss";
const cx = classnames.bind(styles);
function Logo() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("logo", "logo1")} src={logoList.logo1} alt="logo1" />
      <img className={cx("logo", "logo2")} src={logoList.logo2} alt="logo2" />
      <img className={cx("logo", "logo3")} src={logoList.logo3} alt="logo3" />
    </div>
  );
}

export default Logo;
