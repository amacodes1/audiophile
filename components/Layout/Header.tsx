"use client";

import Hamburger from "@/public/assets/tsxsvgs/hamburger"
import X from "@/public/assets/tsxsvgs/x-icon"
import Cart from "@/public/assets/svg/cart.svg"
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/tsxsvgs/Logo";

const NavLinks = () => (
  <>
    <a href="/" className="hover:text-orange transition-colors">
      HOME
    </a>
    <a href="/categories?category=headphones" className="hover:text-orange transition-colors">
      HEADPHONES
    </a>
    <a href="/categories?category=speakers" className="hover:text-orange transition-colors">
      SPEAKERS
    </a>
    <a href="/categories?category=earphones" className="hover:text-orange transition-colors">
      EARPHONES
    </a>
  </>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black-tertiary sticky top-0 z-50">
      <div className="container mx-auto px-2 text-white">
        <div className="flex items-center justify-between h-24 border-b border-white/20">
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Hamburger />}
            </button>
          </div>
          <div className="shrink-0 cursor-pointer"><Logo /></div>
          <nav className="hidden md:flex md:gap-8 uppercase text-sm tracking-wider-sm font-bold">
            <NavLinks />
          </nav>
          <div>
            <Image
              src={Cart}
              className="cursor-pointer"
              alt="cart icon"
              width={23.33} 
              height={15.83} 
              priority 
            />
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
