import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./Subcategory.module.scss";
const cx = classNames.bind(styles);
function Subcategory() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("items")}>
        <NavLink to="signature" className={cx("link")}>
          {({ isActive }) => (
            <span className={isActive ? cx("item", "acitve") : cx("item")}>
              Phúc long signature
            </span>
          )}
        </NavLink>
        <NavLink to="special-tea" className={cx("link")}>
          {({ isActive }) => (
            <span className={isActive ? cx("item", "acitve") : cx("item")}>
              Special tea
            </span>
          )}
        </NavLink>
        <NavLink to="cool-blended-beverage" className={cx("link")}>
          {({ isActive }) => (
            <span className={isActive ? cx("item", "acitve") : cx("item")}>
              Cool blended beverage
            </span>
          )}
        </NavLink>
        <NavLink to="signature-coffee" className={cx("link")}>
          {({ isActive }) => (
            <span className={isActive ? cx("item", "acitve") : cx("item")}>
              Signature coffee
            </span>
          )}
        </NavLink>
        <NavLink to="fresh-squeezed-fruit-juice" className={cx("link")}>
          {({ isActive }) => (
            <span className={isActive ? cx("item", "acitve") : cx("item")}>
              Fresh squeezed fruit juice
            </span>
          )}
        </NavLink>
      </div>
      <div className={cx("line")}></div>
    </div>
  );
}

export default Subcategory;
