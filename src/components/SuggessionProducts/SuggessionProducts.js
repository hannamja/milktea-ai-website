import styles from "./SuggessionProducts.module.scss";
import classNames from "classnames/bind";
import ProductCard from "~/components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bavarageApi from "~/services/bavarageApi";
import routes from "~/config/routes";
import categories from "~/constant/category";
import axios from "axios";
const cx = classNames.bind(styles);
function SuggessionProducts() {
  const [suggesBavarage, setSuggesBavarage] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchAPI = async () => {
      setLoading(true);
      //const result = await bavarageApi.getSugges(signal);
      axios.get('https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/drinks',{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .then((result) => {
          setSuggesBavarage(result.data.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e)
        })

    };
    fetchAPI();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <span className={cx("title")}>Sản Phẩm Nổi Bật</span>
      <span className={cx("sub_title")}>
        Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà
        phê thượng hạng cùng mong muốn mang lại cho khách hàng những trải nghiệm
        giá trị nhất khi thưởng thức.
      </span>
      <Grid spacing={2} container justifyContent="space-around" columns={10}>
        {suggesBavarage.map((v, i) => {
          return (
            <Grid item xs={10} md={2} sm={5} key={i}>
              <ProductCard data={v} key={v.id} />
            </Grid>
          );
        })}
      </Grid>
      <div style={{ marginTop: "20px" }}>
        <Link to={`${routes.products}/${categories[0].link}`}>
          <span className={cx("goto_products")}>Xem thêm</span>
        </Link>
      </div>
    </div>
  );
}

export default SuggessionProducts;
