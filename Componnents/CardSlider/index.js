import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper";
import { connect } from "react-redux";
import Product from "./../cardProduct/index";
const CardSlider = ({ products }) => {
  SwiperCore.use([Navigation, Pagination, Keyboard]);
  return (
    <Swiper
      keyboard={{
        enabled: true
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="mySwiper"
      dir="rtl"
      breakpoints={{
        "@0.00": {
          slidesPerView: 2,
          spaceBetween: 20
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 30
        },
        "@1.25": {
          slidesPerView: 5,
          spaceBetween: 20
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 30
        }
      }}
    >
      {products
        ? products.map(product =>
            <SwiperSlide key={product.id}>
              <Product key={product.id} product={product} />
            </SwiperSlide>
          )
        : null}
    </Swiper>
  );
};
const mapStateToProps = state => {
  return {
    products: state.shop.products
  };
};
export default connect(mapStateToProps)(CardSlider);
