import Tippy from "@tippyjs/react";
import { Gmail } from "~/assets/Icons";
import styles from "./Message.module.scss";
import classNames from "classnames/bind";
import ButtonCustom from "./ButtonCustom/ButtonCustom";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function Message() {
  const [activeItem, setActiveItem] = useState(true);

  const handleButtonClick = () => {
    setActiveItem((prev) => !prev);
  };
  // useEffect(() => {
  //   setActiveItem(selectedItem === 0 ? true : false);
  // }, []);
  const renderTippy = (attrs) => (
    <div className={cx("wrapper-tippy")} tabIndex="-1" {...attrs}>
      <div className={cx("tippy-header")}>
        <div className={cx("tippy-button")}>
          <ButtonCustom activeItem={activeItem} onClick={handleButtonClick}>
            ĐƠN HÀNG
          </ButtonCustom>
        </div>
        <div className={cx("tippy-button")}>
          <ButtonCustom activeItem={!activeItem} onClick={handleButtonClick}>
            TIN TỨC
          </ButtonCustom>
        </div>
      </div>

      <div
        className={cx("line")}
        style={
          activeItem ? { left: 0, top: "-2px" } : { left: "50%", top: "-2px" }
        }
      />
      <div className={cx("tippy_body")}>
        <div className={cx("body")}>
          {activeItem ? (
            <p>Không có đơn hàng nào</p>
          ) : (
            <p>Không có thông báo nào</p>
          )}
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Tippy
        interactive={true}
        render={renderTippy}
        delay={[0, 200]}
        hideOnClick={false}
        animation={false}
        placement="bottom-end"
      >
        <span className={cx("icon")}>
          <Gmail width="1.4rem" className={cx("mail_icon_svg")} />
        </span>
      </Tippy>
    </div>
  );
}

export default Message;
