import React, { useState, useEffect } from "react";
import styles from "./basket.module.css";
import { Button } from "react-bootstrap";
import CartItem from "./../CardItem/index";
import { connect } from "react-redux";
const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  let SendPrice = 20000;
  useEffect(
    () => {
      let items = 0;
      let price = 0;

      cart.forEach(item => {
        items += item.qty;
        price += item.qty * item.price;
      });

      setTotalItems(items);
      setTotalPrice(price);
      setTotal(price + SendPrice);
    },
    [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]
  );

  return (
    <div className={styles.basketinto}>
      {cart.length === 0 && <div> سبد خرید خالی است </div>}
      {cart.map(item => <CartItem key={item.id} item={item} />)}

      {cart.length !== 0 &&
        <>
          <hr />

          <div>
            <div>جمع محصول : تومان{totalPrice}</div>{" "}
          </div>

          <div>
            <div>
              هزینه ارسال:
              {SendPrice}
            </div>{" "}
          </div>

          <div className={styles.totalcard}>
            <div>
              <strong>مجموع : </strong>

              <strong>
                تومان{total.toFixed(0)}
              </strong>
            </div>
          </div>
          <hr />
          <div className={styles.totalcard}>
            <Button onClick={() => alert("Implement Checkout!")}>
              تسویه حساب
            </Button>
          </div>
        </>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(Cart);
