"use client";

import Hamburger from "@/public/assets/tsxsvgs/hamburger"
import X from "@/public/assets/tsxsvgs/x-icon"
import Cart from "@/public/assets/svg/cart.svg"
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/tsxsvgs/Logo";
import CartModal from "../Cart/CartModal";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { clearCart, updateQuantity } from "../../store/cartSlice";
import Link from "next/link";

const NavLinks = () => (
  <>
    <Link href="/" className="hover:text-orange transition-colors">
      HOME
    </Link>
    <Link href="/categories?category=headphones" className="hover:text-orange transition-colors">
      HEADPHONES
    </Link>
    <Link href="/categories?category=speakers" className="hover:text-orange transition-colors">
      SPEAKERS
    </Link>
    <Link href="/categories?category=earphones" className="hover:text-orange transition-colors">
      EARPHONES
    </Link>
  </>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const handleClearCart = () => dispatch(clearCart());
  const handleUpdateQuantity = (id: string, quantity: number) => dispatch(updateQuantity({ id, quantity }));

  return (
    <header className="bg-black-tertiary sticky top-0 z-50">
      <div className="container mx-auto px-6 text-white">
        <div className="flex items-center justify-between h-24 border-b border-white/20">
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="cursor-pointer"
            >
              {isMenuOpen ? <X /> : <Hamburger />}
            </button>
          </div>
          <Link href="/" className="shrink-0 cursor-pointer"><Logo /></Link>
          <nav className="hidden md:flex md:gap-8 uppercase text-sm tracking-wider-sm font-bold">
            <NavLinks />
          </nav>
          <div className="relative">
            <button onClick={() => setIsCartOpen(!isCartOpen)}>
              <Image
                src={Cart}
                className="cursor-pointer"
                alt="cart icon"
                width={23.33} 
                height={15.83} 
                priority 
              />
            </button>
            {isCartOpen && (
              <CartModal
                cartItems={cartItems}
                total={total}
                onClose={() => setIsCartOpen(false)}
                onRemoveAll={handleClearCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-black-secondary p-8">
            <nav className="flex flex-col items-center gap-6 uppercase text-sm tracking-wider-sm font-bold">
              <NavLinks />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
