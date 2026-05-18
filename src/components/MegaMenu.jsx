// import { MEGA_MENU_DATA } from "../utils/categoryData";

// function MegaMenu({ category }) {
//   // Grab the sub-categories for this specific menu tab (e.g., "MEN")
//   const subCategories = MEGA_MENU_DATA[category];

//   // If we don't have mock data drafted for this tab yet, don't display an empty panel
//   if (!subCategories) return null;

//   return (
//     <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//       <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-5 gap-8 text-left">
        
//         {/* Loop through each column category cluster */}
//         {subCategories.map((section, idx) => (
//           <div key={idx} className="space-y-3">
//             {/* Bold Pink/Red Section Headers from your snippet */}
//             <h4 className="text-sm font-extrabold text-rose-500 tracking-wide uppercase">
//               {section.title}
//             </h4>
            
//             {/* Inner sub-item links list */}
//             <ul className="space-y-2">
//               {section.items.map((item, itemIdx) => (
//                 <li key={itemIdx}>
//                   <a 
//                     href={`/search?q=${item}`}
//                     className="text-sm text-gray-600 hover:text-gray-900 font-medium block transition-colors"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

// export default MegaMenu;





import { MEGA_MENU_DATA } from "../utils/categoryData";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom"; // Import navigate hook

function MegaMenu({ category }) {
  const subCategories = MEGA_MENU_DATA[category];
  const { setSearchQuery } = useApp(); // Grab the search setter from global state
  const navigate = useNavigate(); // Initialize page redirector

  if (!subCategories) return null;

  const handleSubItemClick = (itemName) => {
    setSearchQuery(itemName); // 1. Inject the clicked item (e.g. "Casual Shirts") into the search state
    navigate("/"); // 2. Smoothly redirect the user back to the home page product grid
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-5 gap-8 text-left">
        
        {subCategories.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h4 className="text-sm font-extrabold text-rose-500 tracking-wide uppercase">
              {section.title}
            </h4>
            
            <ul className="space-y-2">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  {/* Changed from <a> tag to a button for dynamic state handling */}
                  <button 
                    onClick={() => handleSubItemClick(item)}
                    className="text-sm text-gray-600 hover:text-indigo-600 font-medium block transition-colors text-left w-full cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
}

export default MegaMenu;