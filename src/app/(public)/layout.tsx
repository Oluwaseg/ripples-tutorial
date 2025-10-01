// import { Footer } from '@/components/public/common/footer';
import { Footer } from '@/components/public/common/footer';
import { Navbar } from '@/components/public/common/navbar';
import React from 'react';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
