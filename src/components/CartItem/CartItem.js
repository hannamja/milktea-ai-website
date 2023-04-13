import images from "~/assets/images/bavarage";
import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import QuantityBtns from "../QuantityBtns/QuantityBtns";
import { useState, useEffect } from "react";
import BookBavarage from "../Modal/BookBavarage/BookBavarage";
import { useCart, useDispatchCart } from "~/context/cartContext";
import axios from "axios";
const cx = classNames.bind(styles);

function CartItem(props) {
  const items = useCart()
  const dispatch = useDispatchCart()
  
  const [quantity, setQuantity] = useState();
  const [openModel, setOpenModel] = useState(false);
  const [fix, setFix] = useState(false)

  const [data, setData] = useState([])


  useEffect(() => {
    setQuantity(props.item.qty)
    axios.get('https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/drinks', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .then((result) => {
        const getData = result.data.data.filter((i) => {
          return i.id == props.item.id
        })
        return setData(getData[0])
      })
      .catch((e) => {

      })
  }, [props.item.qty])

  return (
    <>
      <div className={cx("wapper")}>
        <div className={cx("img-wrapper")}>
          <img src={images.trasua} alt="" className={cx("img")} />
        </div>
        <div className={cx("info")}>
          <div className={cx("name")}>{data.name}</div>
          <div className={cx("options")}>
            Kích cỡ: {props.item.size.name}
          </div>
          <div className={cx("bot")}>
            <div className={cx("price")}>{props.item.price} ₫</div>
            {/*  */}
            <QuantityBtns id={props.item.idcart} value={quantity} setValue={setQuantity} setItems={props.setItems} />
          </div>
        </div>
        <div className={cx("actions")}>
          <button className={cx("edit")} onClick={() => { setOpenModel(true); setFix(true) }}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className={cx("delete")} onClick={() => dispatch({ type: 'DEL', item: props.item })}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
      {data.length == 0 ? <></> : <BookBavarage data={data} openModel={openModel} setOpenModel={setOpenModel} isFix={fix} setFix={setFix} itemFix={props.item} setValue={setQuantity} setItems={props.setItems} />}
    </>
  );
}

export default CartItem;
