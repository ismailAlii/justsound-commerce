import { useState } from 'react';
import { useStateContext } from '../context/StateContext';

import { urlFor } from '../lib/imageUrlBuilder';

const ProductDetail = ({ product }) => {
  const { addData } = useStateContext();
  const [imgIndex, setImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleCart = (buyNow) => {
    addData(product, quantity, buyNow);
    setQuantity(1);
  };

  return (
    <div className='product-detail'>
      <div className='left'>
        <div className='img'>
          <img
            src={urlFor(product.image[imgIndex]).url()}
            alt='Product Image'
          />
        </div>
        <div className='thumps'>
          {product.image.map((thump, i) => {
            return (
              <div
                className={`thump ${i === imgIndex && 'active'}`}
                key={thump._key}
                onClick={() => setImgIndex(i)}
              >
                <img src={urlFor(thump).url()} alt='thump' />
              </div>
            );
          })}
        </div>
      </div>
      <div className='right'>
        <h2 className='name'>{product.name}</h2>
        <p className='mini-header'>Details:</p>
        <p className='desc'>{product.details}</p>
        <p className='price'>${product.price}</p>
        <div className='quantity'>
          <p>quantity:</p>
          <div className='qtt-control'>
            <span
              className='remove'
              onClick={() => {
                setQuantity((prev) => {
                  return prev > 1 ? --prev : prev;
                });
              }}
            >
              -
            </span>
            <div className='num'>{quantity}</div>
            <span
              className='add'
              onClick={() => {
                setQuantity(++quantity);
              }}
            >
              +
            </span>
          </div>
        </div>
        <div className='buy-product'>
          <button className='add-to-cart' onClick={() => handleCart(false)}>
            Add to cart
          </button>
          <button className='buy-now' onClick={() => handleCart(true)}>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
