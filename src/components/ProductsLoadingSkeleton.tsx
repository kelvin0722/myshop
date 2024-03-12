export function ProductsLoadingSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[...Array(10)].map((_, index) => (
                <div key={index} className="w-60 animate-pulse bg-gray-200 border border-gray-300 rounded-lg p-4">
                    <div className="w-full h-60 bg-gray-300 rounded-lg"></div>
                    <div className="mt-4 space-y-4">
                        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}