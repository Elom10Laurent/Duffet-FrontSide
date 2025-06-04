import { createContext, useContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  getTotalItems: () => number;
  // clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((p) => p.id === item.id);
      if (existingItem) {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  //   const clearCart = () => {
  //     setCart((prevCart) => prevCart.
  //   };
  const removeFromCart = (id:string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CardProvider");
  }
  return context;
};
