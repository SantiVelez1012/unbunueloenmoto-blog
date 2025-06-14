import Navbar from '@/features/shop/presentation/components/navbar/navbar';
import React from 'react';

function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-base-200'>
      <Navbar>
        {children}
      </Navbar>
    </div>
  );
}

export default ShopLayout;