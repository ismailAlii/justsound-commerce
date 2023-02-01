import { createClient } from 'next-sanity';
import FooterBanner from '../components/FooterBanner';
import HeroBanner from '../components/HeroBanner';
import ProductsList from '../components/ProductsList';

export default function Home({ banner, products }) {
  return (
    <>
      <HeroBanner heroBannerInfo={banner[1]} />
      <ProductsList products={products} />
      <FooterBanner info={banner[0]} />
    </>
  );
}

const client = createClient({
  projectId: '7y4w3n75',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

export async function getServerSideProps() {
  const banner = await client.fetch(`*[_type == "banner"]`);
  const products = await client.fetch(`*[_type == "product"]`);
  return {
    props: {
      banner,
      products,
    },
  };
}
