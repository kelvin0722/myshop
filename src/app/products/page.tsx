import ProductGrid from "@/components/ProductGrid";
import { getProductList } from '@/services/api';

export default async function HomePage() {
    const products = await getProductList()

    return (
        <>
            <ProductGrid products={products} />
        </>
    );
}
