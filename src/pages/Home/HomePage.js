import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
import Banner from "../../components/Banner/Banner";
import React from "react";
import SuggessionProducts from "~/components/SuggessionProducts/SuggessionProducts";
import Homecategories from "~/components/HomeCategories/HomeCategories";
import Cart from "~/components/Cart/Cart";

const cx = classNames.bind(styles);

function HomePage() {
  return (

    <div className={cx("wrapper")}>

      <div className={cx("silde_show")}>
        <Banner />
      </div>
      <Homecategories />
      <SuggessionProducts />
      <Cart />
    </div>
  );
}

export default HomePage;
