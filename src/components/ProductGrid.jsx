import { useApp } from '../context/AppContext';
import ProductCard from './ProductCard';

function ProductGrid() {
  const { products, searchQuery } = useApp(); // Grab states from global context

  // Smart Filter Logic
  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase().trim();
    
    // If search bar is completely empty, show all items
    if (!query) return true;

    // Scan through titles, descriptions, and category codes
    return (
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">
          {searchQuery ? `Search Results for "${searchQuery}"` : "Trending Products"}
        </h2>
        {searchQuery && (
          <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {filteredProducts.length} items found
          </span>
        )}
      </div>
      
      {/* Dynamic Grid Layout Handling empty search states */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500 font-medium text-lg mb-1">No products match your search.</p>
          <p className="text-gray-400 text-sm">Try checking your spelling or looking for different keywords.</p>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;