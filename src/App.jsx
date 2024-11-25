import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CartContext } from "./components/Store/CartContext";


export default function App() {
  const queryClient = new QueryClient()
  
  const initialCart = JSON.parse(localStorage.getItem("Cart Products")) || [];
  const [cartItems, setCartItems] = useState(initialCart);
  
  useEffect(() => {
    localStorage.setItem("Cart Products", JSON.stringify(cartItems));
  }, [cartItems]);
  
  
  return (
    <>
      <QueryClientProvider client={queryClient}>

        <CartContext.Provider value={{ cartItems, setCartItems }}>

          <RouterProvider router={routes} />

        </CartContext.Provider>
        
      </QueryClientProvider>
    </>
  )
}
