function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Product Image Window */}
      <div className="h-48 w-full overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
          {product.category}
        </span>
        <h3 className="text-gray-800 font-bold text-lg line-clamp-1 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>

        {/* Action Footing Row */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <span className="text-xl font-black text-gray-900">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;