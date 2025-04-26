import { useState } from 'react';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="px-4 py-3 text-red-600 font-medium hover:bg-gray-300 flex items-center"
      >
        {item.title}
        {item.subItems.length > 0 && (
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        )}
      </button>

      {item.subItems.length > 0 && isOpen && (
        <div className="absolute z-10 w-64 bg-white shadow-lg rounded-sm">
          {item.subItems.map((subItem, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-3 text-gray-800 hover:bg-gray-200 border-b border-gray-100"
            >
              {subItem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
