import shoppingBag from '../assets/shopping-bag.webp';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';

const Empty = () => {
  const { showHideCart } = useStateContext();
  const router = useRouter();

  const handleRedirect = () => {
    showHideCart(false);
    router.push('/');
  };

  return (
    <div className='empty'>
      <div className='img'>
        <img src={shoppingBag.src} alt='' />
      </div>
      <p>Your Shopping Bag Is Empty.</p>
      <button onClick={handleRedirect}>Shop Items</button>
    </div>
  );
};

export default Empty;
