import styles from "./BavarageItemLoading.module.scss";
import className from "classnames/bind";
const cx = className.bind(styles);
function BavarageItemLoading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("img_wrapper")}></div>
      <div className={cx("info")}>
        <div className={cx("info_name")}></div>
        <div className={cx("info_price")}></div>
      </div>
    </div>
  );
}

export default BavarageItemLoading;
