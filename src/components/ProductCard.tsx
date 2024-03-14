import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { formatCurrency } from '@/lib/helpers/currency';

function ProductCard({
  id,
  imageLocation,
  name,
  price,
  currencyCode,
}: Product) {
  return (
    <Link className='cursor-pointer' href={`/product/${id}`}>
      <div className='group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md'>
        <div className='relative flex h-60 overflow-hidden bg-slate-100'>
          <Image
            src={imageLocation}
            alt='Product image'
            width={300}
            height={300}
            layout='fixed'
          />
        </div>
        <div className='mt-4 px-5 pb-5'>
          <h5 className='text-xl tracking-tight text-slate-900'>{name}</h5>
          <div className='mb-5 mt-2 flex items-center justify-between'>
            <p>
              <span className='text-3xl font-bold text-slate-900'>
                {formatCurrency(currencyCode, price)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
