import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useApp } from '../context/AppContext'; // Import the context hook


function Navbar() {
  const { searchQuery, setSearchQuery } = useApp(); // Consume search states

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center gap-4">
          
          {/* Brand Logo */}
         <div className="flex-shrink-0 flex items-center">
  <Link 
    to="/" 
    onClick={() => setSearchQuery("")} // Resets the product catalog filter instantly
    className="text-2xl font-black tracking-tight text-indigo-600 hover:opacity-90 transition-opacity cursor-pointer"
  >
    ShopSphere
  </Link>
</div>

          {/* Connected Central Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update state on type
                placeholder="Search premium goods, clothing, electronics..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors placeholder-gray-400 text-gray-700"
              />
            </div>
          </div>

          {/* Action Navigation Anchors */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-lg font-medium text-sm transition-colors">
              <User size={20} />
              <span className="hidden sm:inline">Login</span>
            </button> */}


            {/* Updated to link cleanly directly to our new full page login screen view */}
<Link 
  to="/login" 
  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-lg font-medium text-sm transition-colors group"
>
  <User size={20} className="group-hover:scale-105 transition-transform" />
  <span className="hidden sm:inline">Login</span>
</Link>

            <Link to="/cart" className="relative p-2.5 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 flex items-center justify-center">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm scale-90">
                0
              </span>
            </Link>

            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg md:hidden">
              <Menu size={22} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;