import { AiOutlineLeft } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import CartList from './CartList';
import Empty from './Empty';

const Cart = () => {
  const { showCart, showHideCart, cartList } = useStateContext();

  const calcTotalQuantity = () => {
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
      let productQuantity = cartList[i].quantity;
      total = total + productQuantity;
    }
    return total;
  };

  return (
    <div className={`cart ${showCart && 'active'}`}>
      <div className='header' onClick={() => showHideCart(false)}>
        <AiOutlineLeft />
        Your Cart <span>({calcTotalQuantity()} items)</span>
      </div>
      {calcTotalQuantity() > 0 ? <CartList /> : <Empty />}
    </div>
  );
};

export default Cart;
