import { Card, CardImg, Button, Row, Col } from "react-bootstrap";
import styles from "../CardSlider/CardSlider.module.css";
import Link from "next/link";
import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../../redux/Actions/cardAction";

const Product = ({ product, addToCart, loadCurrentItem }) => {
    return (  <Card className={styles.card}>
        <Link href={{ pathname:"/product/:product",query: { product: product.id },}}>
          <Card.Img
            variant="top"
          src={product.image}
          />
             </Link>
          <Card.Body>
            <h6>
            {product.name}
            </h6>
         <Card.Text> {product.price} تومان</Card.Text>
       
         <Button  onClick={() => addToCart(product.id)}>افزودن به سبد خرید</Button>
        
          </Card.Body>
        </Card>);
}
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };
  export default connect(null, mapDispatchToProps)(Product);


