import React from 'react';

import ProductCard from './ProductCard'; // Assuming ProductCard component is defined elsewhere

function ProductGrid({ products }: { products: Product[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}

export default ProductGrid;