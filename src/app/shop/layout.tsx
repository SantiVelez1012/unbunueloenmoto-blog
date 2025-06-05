import React from 'react';

function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-base-200'>
        {children}
    </div>
  );
}

export default ShopLayout;