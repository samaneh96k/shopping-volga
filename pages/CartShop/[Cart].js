import Cart from "./../../Componnents/Basket/index";
import { Container } from "react-bootstrap";
const CartShop = () => {
  return (
    <Container>
      <div style={{ margin: "10% 0" }}>
        <Cart />
      </div>
    </Container>
  );
};

export default CartShop;
