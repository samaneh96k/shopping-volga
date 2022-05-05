import React, { useRef, useState } from "react";
import styles from "./SingleProduct.module.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Divider, Tabs } from "antd";

import { Card, CardImg, Row, Col } from "react-bootstrap";

import Link from "next/link";
import { addToCart } from "../../redux/Actions/cardAction";
import { connect } from "react-redux";
const SingleProduct = ({product}) => {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  return (
    <div>
      <div className={styles.product}>
        <div className={styles.productImg}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff"
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper thumbnail"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.productDetails}>
          <div>نام محصول</div>
          <div>رنگ ها</div>
          <div>سایز ها</div>
          <div> قیمت</div>
          <div className={styles.productNumberic}>
            <div className={styles.Numberic}>
              {" "}<span>تعداد:</span>
              <input type="number" />{" "}
            </div>
            <Button className={styles.btn}   onClick={() => addToCart(current.id)}>افزودن به سبد خرید</Button>
          </div>
          <div>
          <Button className={styles.btn}> ثبت نام  </Button>  
          <Button className={styles.btn}> 
          ورود  
            </Button>
          </div>
        </div>
        <div className={styles.tags}>
          {" "}مانتو جلوبسته اسپرت بهاره دخترونه تابستانه زنونه مانتو_و_شلوار{" "}
        </div>
   
      <div className={styles.description}>
        <Tabs onChange={callback} type="card">
          <TabPane tab="توضیحات" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab=" نظرات کاربران" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
        </div>
    
      <Divider>محصولات مرتبط</Divider>
      <div className={styles.similarProduct}>
        <Link href="#">
          <Card className={styles.card}>
            <Card.Img variant="top" src={"/assets/img/1.jpeg"} />
            <Card.Body>
              <h6>مانتو جلو بسته چین دار</h6>
              <Card.Text>259000 تومان</Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link href="#">
          <Card className={styles.card}>
            <Card.Img variant="top" src={"/assets/img/1.jpeg"} />
            <Card.Body>
              <h6>مانتو جلو بسته چین دار</h6>
              <Card.Text>259000 تومان</Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link href="#">
          <Card className={styles.card}>
            <Card.Img variant="top" src={"/assets/img/1.jpeg"} />
            <Card.Body>
              <h6>مانتو جلو بسته چین دار</h6>
              <Card.Text>259000 تومان</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)( SingleProduct);
