import classNames from "classnames/bind";
import styles from "./AccountMenu.module.scss";
import { NavLink } from "react-router-dom";
import { listItems as accountItems } from "~/constant/accountMenu";
import routes from "~/config/routes";
const cx = classNames.bind(styles);

function AccountMenu() {
  return (
    <div className={cx("wrapper")}>
      {accountItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={`${routes.customer.replace("/*", "/")}${item.link}`}
          >
            {({ isActive }) => (
              <div className={cx("menu_item")}>
                <div className={cx("sidebar", { isActive })}></div>
                <img src={item.image} alt="" className={cx("image")} />
                <div className={cx("title")}>{item.title}</div>
              </div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}

export default AccountMenu;
