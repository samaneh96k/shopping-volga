import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import stylesBasket from "../Basket/basket.module.css";
import { Badge, Button } from "antd";
import Link from "next/link";
import {
  CloseCircleOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import Menu from "./menu";
import { connect } from "react-redux";
import Cart from "./../Basket/index";
const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [showbasket, setShowbasket] = useState(false);

  useEffect(
    () => {
      let count = 0;
      cart.forEach(item => {
        count += item.qty;
      });

      setCartCount(count);
    },
    [cart, cartCount]
  );

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles.navbar}>
        <button
          className={styles.menu}
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <div className={styles.menu}>
            <MenuOutlined style={{ fontSize: "26px" }} />

            <h5 className={styles.menuText}>منو</h5>
          </div>
        </button>
        <div className={styles.logo}>
          <Link href="/">
          <img src={"/assets/logo/3656c32d88790b61bfffad939f2a49d6.png"} />
          </Link>
        </div>
        <div className={styles.leftmenu}>
          {" "}<div>
            <SearchOutlined style={{ fontSize: "26px" }} />
          </div>
          <button
            className={styles.shopcardbtn}
            onClick={() => {
              setShowbasket(true);
            }}
          >
            <Badge count={cartCount} style={{ background: "#333" }}>
              {" "}<ShoppingCartOutlined style={{ fontSize: "26px" }} />
            </Badge>
          </button>
          <div />
        </div>
      </div>
      <div>
        <button
          className={showMenu ? styles.btnClose : styles.showBtn}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <CloseCircleOutlined style={{ fontSize: "26px" }} />
        </button>
        {showMenu ? <Menu closeBtn={showMenu} /> : null}
        {showbasket
          ? <div className={stylesBasket.basketmain}>
              <div className={stylesBasket.cartItems}>
                <Button
                  onClick={() => {
                    setShowbasket(false);
                  }}
                >
                 <Link href="../CartShop/[Cart].js">
                  مشاهده سبد خرید
                  </Link> 
                </Button>
                <Cart />
              </div>

              <button
                className={stylesBasket.closebtn}
                onClick={() => {
                  setShowbasket(false);
                }}
              >
                {" "}<CloseCircleOutlined style={{ fontSize: "26px" }} />
              </button>
            </div>
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(Navbar);
