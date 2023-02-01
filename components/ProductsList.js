import Link from 'next/link';
import { urlFor } from '../lib/imageUrlBuilder';
const ProductsList = ({ products, header }) => {
  return (
    <div className='container best-sells-products' id='products_list'>
      <div className='header'>
        <h1>{header ? header : 'Best Seller Products'}</h1>
        {!header && <p>speaker There are many variations passages</p>}
      </div>
      <div className='products-list'>
        {products.map((product) => {
          return (
            <div key={product.slug.current} className='product-box'>
              <Link href={`/products/${product.slug.current}`}>
                <div>
                  <div className='img'>
                    <img src={urlFor(product.image[0]).url()} alt='' />
                  </div>
                  <div className='info'>
                    <p className='name'>{product.name}</p>
                    <div className='price'>${product.price}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
