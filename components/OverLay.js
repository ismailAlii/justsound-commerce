import { useStateContext } from '../context/StateContext';

const OverLay = () => {
  const { showCart, showHideCart } = useStateContext();

  if (showCart) {
    return <div className='over-lay' onClick={() => showHideCart(false)}></div>;
  } else {
    return null;
  }
};

export default OverLay;
