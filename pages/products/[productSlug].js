import { useStateContext } from '../../context/StateContext';
import { createClient } from 'next-sanity';
import ProductDetail from '../../components/ProductDetail';
import ProductsList from '../../components/ProductsList';

const ProductPage = ({ product, relatedProducts }) => {
  const { showCart, showHideCart } = useStateContext();
  return (
    <div className='container'>
      <ProductDetail product={product} />
      <ProductsList products={relatedProducts} header={'You May Also Like'} />
    </div>
  );
};

export default ProductPage;

const client = createClient({
  projectId: '7y4w3n75',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

export async function getServerSideProps(context) {
  const { params } = context;
  const { productSlug } = params;
  const products = await client.fetch(`*[_type == "product"]`);
  const product = products.filter((product) => {
    return product.slug.current === productSlug;
  })[0];
  const relatedProducts = products.filter((product) => {
    return product.slug.current !== productSlug;
  });
  return {
    props: {
      product,
      relatedProducts,
    },
  };
}
