import styles from "./BavarageItem.module.scss";
import className from "classnames/bind";
const cx = className.bind(styles);
function BavarageItem({ data }) {
  console.log(data)
  return (
    <div className={cx("wrapper")}>
      <div className="img_wrapper">
        <img src={data.image} alt="do uong" className={cx("img")} />
      </div>
      <div className={cx("info")}>
        <div className={cx("info_name")}>{data.name}</div>
        <div className={cx("info_price")}>{data.price}</div>
      </div>
    </div>
  );
}

export default BavarageItem;
