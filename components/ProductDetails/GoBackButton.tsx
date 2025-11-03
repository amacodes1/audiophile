"use client";

import { useRouter } from 'next/navigation';

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="text-black/50 hover:text-orange transition-colors cursor-pointer"
    >
      Go Back
    </button>
  );
};

export default GoBackButton;