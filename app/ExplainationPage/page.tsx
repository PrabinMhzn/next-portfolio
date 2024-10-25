// pages/stripe-documentation.tsx
import InteractiveCodeGuide from "@/components/InteractiveCodeSection";

const StripeDocumentationPage = () => {
  const checkoutSections = [
    {
      code: `"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";`,
      explanation:
        "Use client is being used because it renders on client side. 2. Import libraries from react. CreateContext---- usestate changes the stae. usecontext--- ReactNode-----",
      highlightLines: [7, 8],
    },
    {
      code: `interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  isCartOpen: boolean;
  cartItems: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
}`,
      explanation: `Interface is used in typescript for defining the type of the varible.
        addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;`,
      highlightLines: [15, 15],
    },
    {
      code: `const CartContext = createContext<CartContextType | undefined>(undefined);`,
      explanation: ` function cartcontext is defined .. <this|that>`,
      highlightLines: [15, 15],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Stripe Integration Guide</h1>
      <InteractiveCodeGuide
        title="Setting up Stripe Checkout"
        sections={checkoutSections}
        language="javascript"
      />
      {/* You can add more InteractiveCodeGuide components here for different sections */}
    </div>
  );
};

export default StripeDocumentationPage;
