import Head from 'next/head';
import Footer from './Footer';
import NavBar from './NavBar';
import OverLay from './OverLay';
import Cart from './Cart';

const Layout = ({ children }) => {
  return (
    <div className='main'>
      <Cart />
      <OverLay />
      <Head>
        <title>JUSTSOUND Store</title>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
