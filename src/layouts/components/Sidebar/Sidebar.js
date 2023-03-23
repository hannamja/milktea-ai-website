import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";
import categories from "~/constant/category";
import { useParams } from "react-router-dom";
import CategoryItem from "~/components/CategoryItem/CategoryItem";
const cx = classNames.bind(styles);
function Sidebar() {
  let { category } = useParams();
  return (
    <div className={cx("wrapper")}>
      <Grid container columns={10}>
        {categories.map((v, i) => {
          return (
            <Grid alignItems="flex-start" item md={5} key={i}>
              <CategoryItem smallWidth data={v} key={i} active={category} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Sidebar;
