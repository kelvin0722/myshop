export function ProductsLoadingSkeleton() {
  return (
    <div
      data-testid='product-grid-loading'
      className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
    >
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className='w-60 animate-pulse rounded-lg border border-gray-300 bg-gray-200 p-4'
        >
          <div className='h-60 w-full rounded-lg bg-gray-300'></div>
          <div className='mt-4 space-y-4'>
            <div className='h-4 w-3/4 rounded bg-gray-300'></div>
            <div className='h-4 w-1/2 rounded bg-gray-300'></div>
          </div>
        </div>
      ))}
    </div>
  );
}
