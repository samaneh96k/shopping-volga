import { connect } from "react-redux";
import React, { useState } from "react";
import styles from "../Basket/basket.module.css";
import { Card } from "react-bootstrap";
import Link from "next/link";
import {
  adjustItemQty,
  removeFromCart
} from "./../../redux/Actions/cardAction";
const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [Input, setInput] = useState(item.qty);
  const onChangeHandler = e => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  return (
    <div key={item.id} className={styles.itemscard}>
      <div className={styles.items}>
        <Card className={styles.card}>
          <Link href="/product/:product">
            <Card.Img
              className={styles.imgcard}
              variant="top"
              src={item.image}
            />
          </Link>
          <Card.Body>
            <h6>
              {item.name}
            </h6>
            <Card.Text>
              {" "}{item.price} تومان
            </Card.Text>
          </Card.Body>
        </Card>

        <div className={styles.number}>
          <button onClick={() => removeFromCart(item.id)}>حذف کردن</button>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={Input}
            onChange={onChangeHandler}
          />

          <div>
            {item.qty} x تومان {item.price.toFixed(0)}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: id => dispatch(removeFromCart(id))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
