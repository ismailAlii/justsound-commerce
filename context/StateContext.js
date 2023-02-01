import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

const notifySuccess = () => toast.success('Successfully added to cart!');
const notifyError = () => toast.error('Product already exits in cart!');

export const StateContext = ({ children }) => {
  // Start Cart
  const [showCart, setShowCart] = useState(false);
  const [cartList, setCartList] = useState([]);

  const showHideCart = (state) => {
    setShowCart(state);
  };

  const addData = (product, quantity, buyNow) => {
    let productInfo = { product, quantity };
    let allCartProducts = cartList.map((element) => {
      return element.product.name;
    });
    if (allCartProducts.includes(product.name)) {
      notifyError();
    } else {
      setCartList((prev) => {
        return [...prev, productInfo];
      });
      notifySuccess();
      if (buyNow) {
        setShowCart(true);
      }
    }
  };

  const deleteProduct = (productSlug, productQuantity) => {
    setCartList((prev) => {
      return prev.filter((product) => {
        return product.product.slug.current !== productSlug;
      });
    });
  };

  const decreaseQuantity = (productSlug) => {
    setCartList((prev) => {
      return prev.map((product) => {
        if (product.product.slug.current === productSlug) {
          return product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product;
        } else {
          return product;
        }
      });
    });
  };

  const increaseQuantity = (productSlug) => {
    setCartList((prev) => {
      return prev.map((product) => {
        if (product.product.slug.current === productSlug) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    });
  };
  // End Cart
  // Start Strip

  // End Strip

  return (
    <Context.Provider
      value={{
        showCart,
        showHideCart,
        addData,
        cartList,
        deleteProduct,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
