import React, { createContext, useContext, useReducer, useEffect } from "react";

// Function to load cart data from localStorage
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

const initialCartState = {
  cart: loadCartFromLocalStorage(),
};

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemExists = state.cart.some((item) => item.id === action.payload.id);
      if (itemExists) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.itemId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  // Use useEffect to update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  return (
    <CartContext.Provider value={{ ...cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
