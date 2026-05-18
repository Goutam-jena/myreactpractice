// import MegaMenu from "./MegaMenu";

// function CategoryBar() {
//   const categories = [
//     "Electronics",
//     "MEN",
//     "WOMEN",
//     "Home & Furniture",
//     "TVs & Appliances",
//     "Grocery",
//   ];

//   return (
//     <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center gap-6 py-3 overflow-x-visible no-scrollbar whitespace-nowrap">
          
//           <button className="text-sm font-extrabold text-indigo-600 hover:text-indigo-700 cursor-pointer uppercase tracking-wider">
//             All
//           </button>
          
//           <div className="h-4 w-[1px] bg-gray-300" />

//           {/* Map through each tab view anchor */}
//           {categories.map((cat, index) => (
//             /* CRITICAL: We add 'group' class here so Tailwind knows this button controls the menu inside it */
//             <div key={index} className="group inline-block">
//               <button
//                 className="text-sm font-bold text-gray-600 hover:text-indigo-600 pb-3 -mb-3 transition-colors duration-150 cursor-pointer uppercase tracking-wide"
//               >
//                 {cat}
//               </button>

//               {/* The absolute overlay component loads inside the item container */}
//               <MegaMenu category={cat.toUpperCase()} />
//             </div>
//           ))}
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryBar;











import { useApp } from "../context/AppContext";
import MegaMenu from "./MegaMenu";

function CategoryBar() {
  const { setSearchQuery } = useApp();
  const categories = ["Electronics", "MEN", "WOMEN", "Home & Furniture", "TVs & Appliances", "Grocery"];

  return (
    <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 py-3 overflow-x-visible no-scrollbar whitespace-nowrap">
          
          {/* Clicking 'All' clears the search query completely to show all items */}
          <button 
            onClick={() => setSearchQuery("")}
            className="text-sm font-extrabold text-indigo-600 hover:text-indigo-700 cursor-pointer uppercase tracking-wider"
          >
            All
          </button>
          
          <div className="h-4 w-[1px] bg-gray-300" />

          {categories.map((cat, index) => (
            <div key={index} className="group inline-block">
              {/* Clicking a main category button filters the grid by that category name */}
              <button
                onClick={() => setSearchQuery(cat)}
                className="text-sm font-bold text-gray-600 hover:text-indigo-600 pb-3 -mb-3 transition-colors duration-150 cursor-pointer uppercase tracking-wide"
              >
                {cat}
              </button>

              <MegaMenu category={cat.toUpperCase()} />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;