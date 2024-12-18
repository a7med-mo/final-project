import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CartContext } from "./components/Store/CartContext";
import { WishlistContext } from "./components/WishlistContaxt/WishlistContaxt";
import { Toaster } from "react-hot-toast";
import { CheckOutContext } from "./components/Store/CheckOutContext";


export default function App() {
  const queryClient = new QueryClient();


  const initialCart = JSON.parse(localStorage.getItem("Cart Products")) || [];
  const [cartItems, setCartItems] = useState(initialCart);
  const [puyItNow, setPuyItNow] = useState([]);
  const [fromCart, setFromCart] = useState(false);

  const updatePuyItNow = (data) => {
    setPuyItNow(data);
    setFromCart(false); // تحديد أن البيانات تأتي من "شراء الآن"
  };

  const updateFromCart = (data) => {
    setCartItems(data);
    setFromCart(true); // تحديد أن البيانات تأتي من السلة
  };


  useEffect(() => {
    localStorage.setItem("Cart Products", JSON.stringify(cartItems));
  }, [cartItems]);


  const initialWishlist = JSON.parse(localStorage.getItem("Wishlist Products")) || [];
  const [wishlist, setWishlist] = useState(initialWishlist);

  useEffect(() => {
    localStorage.setItem("Wishlist Products", JSON.stringify(wishlist));
  }, [wishlist]);


  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 3000,
          style: { fontSize: "14px" },
        }}
      />
      <CheckOutContext.Provider value={{ puyItNow, cartItems, fromCart, updatePuyItNow, updateFromCart }}>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <WishlistContext.Provider value={{ wishlist, setWishlist }}>
            <RouterProvider router={routes} />
          </WishlistContext.Provider>
        </CartContext.Provider>
      </CheckOutContext.Provider>
    </QueryClientProvider>
  );
}
