import { Box, Modal } from "@mui/material";
import classNames from "classnames/bind";
import styles from "./BookBavarage.module.scss";
import images from "~/assets/images/bavarage";
import { useState, useEffect } from "react";
import { faCartPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart, useDispatchCart } from "~/context/cartContext";
import { GroundOverlay } from "@react-google-maps/api";

const styleModal = {
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
const css = {
  background: 'rgb(0, 111, 60)'
}
const css0 = {
  background: 'gray'
}
const css1 = {
  background: 'white'
}
const cx = classNames.bind(styles);

function BookBavarage({ data, openModel, setOpenModel, isFix, itemFix, setFix, setValue, setItems }) {
  const [quantity, setQuantity] = useState(1);
  const items = useCart()
  const [item, setItem] = useState({ 'idcart': 0, 'qty': 1, 'id': data.id, 'price': data.price, 'size': data.size[0], 'toppings': [] })
  try {
    useEffect(() => { setQuantity(itemFix.qty); setItem(itemFix) }, [itemFix.qty])
  }
  catch (e) {

  }

  const handleClickSize = (type, value, e) => {
    const clone = item
    clone[`${type}`] = value

    setItem(clone)
    let colect = document.getElementsByClassName(cx(e.target.parentElement.className))
    for (let i = 0; i < colect.length; i++) {
      if (colect[i] === e.target.parentElement) colect[i].lastChild.style.background = "rgb(0, 111, 60)"
      else colect[i].lastChild.style.background = "gray"
    }
  }


  const handleClick = (type, value, e) => {
    const clone = item
    clone[`${type}`] = value

    setItem(clone)
    if (type == 'qty') return
    let colect = document.getElementsByClassName(cx(e.target.className))
    for (let i = 0; i < colect.length; i++) {
      if (colect[i] === e.target) {
        colect[i].style.background = "rgb(0, 111, 60)"
        colect[i].style.color = "white"
      }
      else {
        colect[i].style.background = "white"
        colect[i].style.color = "black"
      }
    }
  }

  const onClickTpMinus = (id) => {
    const clone = { ...item }
    let i = 0;

    for (let e of item.toppings) {
      if (e.tp.id == id.id) {
        break
      }
      i++
    }

    if (clone.toppings[i].sl == 1) {
      clone.toppings=clone.toppings.filter((i) => {
        return i.tp.id != id.id
      })
      setItem(clone)
      return
    }

    clone.toppings[i].sl = clone.toppings[i].sl - 1;
    setItem(() => {
      return clone
    })
  }

  const onClickTpAdd = (id) => {
    const clone = { ...item }
    let i = 0;
    let idx = -1
    for (let e of item.toppings) {
      if (e.tp.id == id.id) {
        idx = i
        break
      }
      i++
    }
    if (idx == -1) {
      let obj = { 'tp': id, 'sl': 1 }
      setItem(prev => {
        return { ...prev, 'toppings': [...item.toppings, obj] }
      })
      return
    }
    clone.toppings[idx].sl += 1;
    setItem(clone)
  }

  const dispatch = useDispatchCart()
  const addToCart = () => {
    const clone = item
    if (items.length == 0) clone['idcart'] = items.length + 1
    else clone['idcart'] = items[items.length - 1].idcart + 1
    dispatch({ type: 'ADD', item: clone })
    setOpenModel(false)
    setQuantity(1)
    if (items.length == 0) setItem({ 'idcart': items.length + 1, 'qty': 1, 'id': data.id, 'price': data.price, 'size': data.size[0], 'toppings': [] })
    else setItem({ 'idcart': items[items.length - 1].idcart + 1, 'qty': 1, 'id': data.id, 'price': data.price, 'size': data.size[0], 'toppings': [] })
  }

  const addToCart1 = () => {
    const clone = { ...item }
    clone['idcart'] = itemFix.idcart
    console.log('clone:')
    console.log(clone === item)
    dispatch({ type: 'FIX', item: clone })
    console.log("cslq:" + clone.qty)
    setValue(clone.qty)
    setOpenModel(false)

    setQuantity(quantity)
    // setItems(prev=>prev+1-1)
  }

  if (isFix) {
    return (<div onClick={(e) => e.preventDefault()}>
      <Modal
        open={openModel}
        onClose={() => { setOpenModel(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={styleModal} alignItems="center">
          <div className={cx("wapper")}>
            <button
              className={cx("modal-close")}
              onClick={() => { setQuantity(itemFix.qty); setOpenModel(false) }}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <div style={{ display: "flex" }}>
              <div className={cx("content-left")}>
                <img src={images.trasua} alt="" className={cx("image")} />
              </div>
              <div className={cx("content-right")}>
                <div className={cx("name")}>{itemFix.name}</div>
                <div className={cx("sub_name")}>{itemFix.name}</div>
                <div className={cx("price-quantity")}>
                  <span className={cx("price")}>{itemFix.price}&nbsp;đ</span>
                  <div className={cx("quantity")}>
                    <button className={cx("quantity-decrease-btn")} onClick={(e) => { if (quantity - 1 > 0) { setQuantity(quantity - 1); handleClick('qty', quantity - 1, e) } }}>-</button>
                    <span className={cx("quantity-value")}>{quantity}</span>
                    <button className={cx("quantity-increase-btn")} onClick={(e) => { setQuantity(quantity + 1); handleClick('qty', quantity + 1, e) }}>+</button>
                  </div>
                </div>
                <div className={cx("options")}>
                  <div className={cx("option-title")}>Chọn kích cỡ</div>
                  <div className={cx("size-options")}>
                    {
                      data.size.map((i) => {
                        return <button onClick={(e) => handleClickSize('size', i, e)} className={cx("size-options-btn")}>
                          <div className={cx("size-option-top")}>{i.name}</div>
                          <div style={itemFix.size.name == i.name ? css : css0} className={cx("size-option-bot")}>+5000 &nbsp;đ</div>
                        </button>
                      })
                    }
                  </div>
                  <div className={cx("option-title")}>Chọn topping</div>
                  <div className={cx("topping")}>
                    {
                      data.toppings.map((i) => {
                        return <>
                          <div className={cx("topping-left")}>
                            <div className={cx("topping-name")}>
                              {i.name}
                            </div>
                            <div className={cx("topping-price")}>{i.price}&nbsp;đ</div>
                          </div>
                          <div className={cx("topping-right")}>
                            <button onClick={() => onClickTpMinus(i)} className={cx("quantity-decrease-btn")}>-</button>
                            <span className={cx("quantity")}>
                              <span className={cx("quantity-value")}>{0 || (item.toppings.filter((ii) => { return ii.tp.id == i.id })).length == 0 ? 0 : (item.toppings.filter((ii) => { return ii.tp.id == i.id }))[0].sl}</span>
                            </span>
                            <button onClick={() => onClickTpAdd(i)} className={cx("quantity-increase-btn")}>+</button>
                          </div>
                        </>
                      })
                    }

                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => addToCart1()} className={cx("add-to-cart")}>
              <FontAwesomeIcon icon={faCartPlus} />
              <span style={{ marginLeft: "10px" }}>
                Thêm vào giỏ hàng : {itemFix.price} &nbsp;đ
              </span>
            </button>


          </div>

        </Box>
      </Modal>
    </div >)
  }
  else {
    return (
      <div onClick={(e) => e.preventDefault()}>
        <Modal
          open={openModel}
          onClose={() => setOpenModel(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={styleModal} alignItems="center">
            <div className={cx("wapper")}>
              <button
                className={cx("modal-close")}
                onClick={() => setOpenModel(false)}
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
              <div style={{ display: "flex" }}>
                <div className={cx("content-left")}>
                  <img src={images.trasua} alt="" className={cx("image")} />
                </div>
                <div className={cx("content-right")}>
                  <div className={cx("name")}>{data.name}</div>
                  <div className={cx("sub_name")}>{data.name}</div>
                  <div className={cx("price-quantity")}>
                    <span className={cx("price")}>{data.price}&nbsp;đ</span>
                    <div className={cx("quantity")}>
                      <button className={cx("quantity-decrease-btn")} onClick={() => { if (quantity - 1 > 0) { setQuantity(quantity - 1); handleClick('qty', quantity - 1) } }}>-</button>
                      <span className={cx("quantity-value")}>{quantity}</span>
                      <button className={cx("quantity-increase-btn")} onClick={() => { setQuantity(quantity + 1); handleClick('qty', quantity + 1) }}>+</button>
                    </div>
                  </div>
                  <div className={cx("options")}>
                    <div className={cx("option-title")}>Chọn kích cỡ</div>
                    <div className={cx("size-options")}>
                      {
                        data.size.map(i => {
                          return <button onClick={(e) => handleClickSize('size', i, e)} className={cx("size-options-btn")}>
                            <div className={cx("size-option-top")}>{i.name}</div>
                            <div className={cx("size-option-bot", i.name == 'S' ? "active" : '')}>
                              {i.price} &nbsp;đ
                            </div>
                          </button>
                        })
                      }
                    </div>
                    <div className={cx("option-title")}>Chọn topping</div>
                    <div className={cx("topping")}>
                      {
                        data.toppings.map((i) => {
                          return <><div className={cx("topping-left")}>
                            <div className={cx("topping-name")}>
                              {i.name}
                            </div>
                            <div className={cx("topping-price")}>{i.price}&nbsp;đ</div>
                          </div>
                            <div className={cx("topping-right")}>
                              <button onClick={() => onClickTpMinus(i)} className={cx("quantity-decrease-btn")}>-</button>
                              <span className={cx("quantity")}>
                                <span className={cx("quantity-value")}>{0 || (item.toppings.filter((ii) => { return ii.tp.id == i.id })).length == 0 ? 0 : (item.toppings.filter((ii) => { return ii.tp.id == i.id }))[0].sl}</span>
                              </span>
                              <button onClick={() => onClickTpAdd(i)} className={cx("quantity-increase-btn")}>+</button>
                            </div></>
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => addToCart()} className={cx("add-to-cart")}>
                <FontAwesomeIcon icon={faCartPlus} />
                <span style={{ marginLeft: "10px" }}>
                  Thêm vào giỏ hàng : {data.price} &nbsp;đ
                </span>
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
}

export default BookBavarage;
