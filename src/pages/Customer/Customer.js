import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { listItems as accountMenu } from "~/constant/accountMenu";
import classNames from "classnames/bind";
import styles from "./Customer.module.scss";
import routes from "~/config/routes";
import { ArrowRight } from "~/assets/Icons";
const cx = classNames.bind(styles);

function Customer() {
  return (
    <div className={cx("wrapper")}>
      <div>
        <Link to="/">
          <span className={cx("link")}>Trang chủ</span>
        </Link>
        / Tài khoản
      </div>
      <div className={cx("body")}>
        <div className={cx("sidebar")}>
          {accountMenu.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`${routes.customer.replace("/*", "/")}${item.link}`}
              >
                {({ isActive }) => (
                  <div className={cx("menu_item")}>
                    <div className={cx("item_sidebar", { isActive })}></div>
                    <img src={item.image} alt="" className={cx("item_image")} />
                    <div className={cx("item_title")}>{item.title}</div>
                    <span className={cx("icon")}>
                      <ArrowRight
                        color="rgb(217, 217, 217)"
                        width="1.2rem"
                        height="1.2rem"
                      />
                    </span>
                  </div>
                )}
              </NavLink>
            );
          })}
        </div>
        <div className={cx("content")}>
          <Routes>
            <Route index element={<Navigate to={accountMenu[0].link} />} />
            {accountMenu.map((item, index) => {
              return (
                <Route
                  key={item.link}
                  path={item.link}
                  element={item.element}
                />
              );
            })}
            <Route path="*" element={<Navigate to="account" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Customer;
