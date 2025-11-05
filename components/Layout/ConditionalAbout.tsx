"use client";

import { usePathname } from 'next/navigation';
import About from './AboutSection';

const ConditionalAbout = () => {
  const pathname = usePathname();
  
  if (pathname === '/checkout') {
    return null;
  }
  
  return <About />;
};

export default ConditionalAbout;