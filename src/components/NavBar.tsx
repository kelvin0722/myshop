import Link from "next/link";

export function NavBar() {
    return (
        <header className="sticky top-0 z-10 bg-sky-500 text-white">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">  {/* Wrap in nav tag */}
              <Link href="/" className="font-bold text-xl">Carry1st</Link>
              <Link className="font-bold text-md" href={`/product/new`}>Add Product</Link>
            </nav>
        </header>
    );
}