import React from 'react';

interface PageBannerProps {
  title: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <div className="bg-black-secondary">
      <div className="container mx-auto px-2 flex items-center justify-center h-48 md:h-64">
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wider uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageBanner;