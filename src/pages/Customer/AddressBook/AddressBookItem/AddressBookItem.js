import classNames from "classnames/bind";
import { Location } from "~/assets/Icons";
import styles from "./AddressBookItem.module.scss";
const cx = classNames.bind(styles);
function AddressBookItem() {
  return (
    <div className={cx("item")}>
      <div className={cx("item_header")}>
        <Location width="20px" height="25px" color={"var(--primary)"} />
        <button className={cx("left-btn")}>Địa chỉ mặc định</button>
        <button className={cx("right-btn")}>Xóa</button>
        <button className={cx("right-btn")}>Chỉnh sửa</button>
      </div>
      <div className={cx("name")}>tu</div>
      <div style={{ display: "block" }}>
        <span style={{ textDecoration: "underline" }}>Địa chỉ:</span>
        &nbsp;
        <span>dd, X. Hàm Mỹ, H. Hàm Thuận Nam, T. Bình Thuận</span>
      </div>
      <div>
        <span style={{ textDecoration: "underline", display: "block" }}>
          Số điện thoại:
        </span>
        &nbsp;0945444444
      </div>
    </div>
  );
}

export default AddressBookItem;
