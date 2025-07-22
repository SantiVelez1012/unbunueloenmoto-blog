import Navbar from '@/features/shop/presentation/components/navbar/navbar';
import React from 'react';

function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-base-200'>
      <Navbar>
        {children}
      </Navbar>
    </main>
  );
}

export default ShopLayout;