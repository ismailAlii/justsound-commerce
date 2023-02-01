import { useStateContext } from '../context/StateContext';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
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
    <div className='nav'>
      <div className='container'>
        <Link href='/'>justsound</Link>
        <div className='cart-btn' onClick={() => showHideCart(!showCart)}>
          <AiOutlineShoppingCart />
          <span>{calcTotalQuantity()}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
