import styles from "./CategoryDes.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images/bavarage";
const cx = classNames.bind(styles);
function CategoryDes() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("des")}>
        <div className={cx("title")}>Danh mục sản phẩm đồ uống</div>
        <p>
          Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng
          khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê.
        </p>
        <p>
          Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp
          phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày
          càng bay cao, vươn xa.
        </p>
      </div>
      <div className={cx("image")}>
        <img src={images.trasua} alt="" />
      </div>
    </div>
  );
}

export default CategoryDes;
