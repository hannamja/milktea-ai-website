import { faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setRef } from "@mui/material";
import classNames from "classnames/bind";
import { useCart, useDispatchCart } from "~/context/cartContext";
import styles from "./QuantityBtns.module.scss";
const cx = classNames.bind(styles);
function QuantityBtns({ id, value, setValue, canZero, setItems }) {
  const dispatch = useDispatchCart();
  const items = useCart()
  console.log("value:" + value)
  const handleDecrease = () => {


    if (value > 1) {
      for (let i of items) {
        if (i.idcart === id) {
          dispatch({ type: 'MINUS_QTY', item: i })
          break
        }
      }
      setValue((prev) => prev - 1);
      setItems((prev) => prev - 1)
    }
    else if (canZero && value === 1) setValue(0);
  };
  const handleIncrease = () => {

    for (let i of items) {
      if (i.idcart === id) {
        dispatch({ type: 'ADD_QTY', item: i })
        break
      }
    }
    setItems((prev) => prev + 1)
    setValue((prev) => prev + 1);
  };
  return (
    <div className={cx("wrapper")}>
      <button
        onClick={handleDecrease}
        className={cx("btn", { active: value > 0 })}
      >
        <FontAwesomeIcon icon={faSubtract} />
      </button>
      <span className={cx("value")}>{value}</span>
      <button
        onClick={handleIncrease}
        className={cx("btn", { active: value > 0 })}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default QuantityBtns;
