import Navbar from '@/features/shared/presentation/components/navbar/navbar';
import { SharedCopies } from '@/features/shared/presentation/constants/copies';
import React from 'react';

function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='bg-base-200'>
      <Navbar links={SharedCopies.navbarLinks} />
      {children}
    </main>
  );
}

export default ShopLayout;