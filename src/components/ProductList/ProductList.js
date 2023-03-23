import styles from "./ProductList.module.scss";
import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import BookBavarage from "../Modal/BookBavarage/BookBavarage";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import bavarageApi from "../../services/bavarageApi";
import ProductCard from "../ProductCard/ProductCard";
const cx = classNames.bind(styles);

function ProductList({ type }) {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    const getDrinks = async () => {
      const { data } = await bavarageApi.getDrinkByType();
      setDrinks(data);
    };
    getDrinks();
  }, []);
  return (
    <Grid spacing={2} container justifyContent="start" columns={12}>
      {drinks.map((v, i) => {
        return (
          <Grid item xs={12} md={4} sm={6} key={i}>
            <ProductCard data={v} key={v.id} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProductList;
