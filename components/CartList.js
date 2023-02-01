import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/imageUrlBuilder';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartList = () => {
  const { cartList, deleteProduct, decreaseQuantity, increaseQuantity } =
    useStateContext();

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
      let productPrice = cartList[i].product.price;
      let productQuantity = cartList[i].quantity;
      total = total + productPrice * productQuantity;
    }
    return total;
  };

  return (
    <div className='cart-list'>
      <div className='cart-items'>
        {cartList.map((product) => {
          return (
            <div className='cart-item' key={product.product.slug.current}>
              <div className='img'>
                <img
                  src={urlFor(product.product.image[0]).url()}
                  alt='Product Image'
                />
              </div>
              <div className='left'>
                <p className='name'>{product.product.name}</p>
                <div className='qtt-control'>
                  <span
                    className='remove'
                    onClick={() =>
                      decreaseQuantity(product.product.slug.current)
                    }
                  >
                    -
                  </span>
                  <div className='num'>{product.quantity}</div>
                  <span
                    className='add'
                    onClick={() =>
                      increaseQuantity(product.product.slug.current)
                    }
                  >
                    +
                  </span>
                </div>
              </div>
              <div className='right'>
                <p className='price'>${product.product.price}</p>
                <span
                  className='delete'
                  onClick={() =>
                    deleteProduct(
                      product.product.slug.current,
                      product.quantity
                    )
                  }
                >
                  <RiDeleteBin6Line />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className='cart-info'>
        <div className='total'>
          <span>Subtotals:</span>
          <span>${getTotalPrice()}</span>
        </div>
        <button
          type='button'
          className='pay-with-strip'
          onClick={() => console.log(cartList)}
        >
          Pay with Strip
        </button>
      </div>
    </div>
  );
};

export default CartList;
