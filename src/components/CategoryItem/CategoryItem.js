import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "~/components/CategoryItem/CategoryItem.module.scss";
const cx = classNames.bind(styles);

function CategoryItem({ data, active, smallWidth }) {
  return (
    <Link to={`/san-pham/${data.link}`}>
      <div className={cx("wrapper")}>
        <div
          className={cx(
            "image",
            { active: data.link === active },
            { smallWidth }
          )}
        >
          <img
            src={data.image}
            alt={""}
            className={cx({ "img-small": smallWidth })}
          />
        </div>
        <span className={cx("title")}>{data.title}</span>
      </div>
    </Link>
  );
}

export default CategoryItem;
