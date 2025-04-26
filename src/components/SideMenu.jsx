import { useState } from 'react';

const SideMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { 
      title: 'LÃNH ĐẠO', 
      subItems: ['ĐẢNG ỦY', 'BAN GIÁM HIỆU'] 
    },
    { 
      title: 'CÁC PHÒNG BAN', 
      subItems: ['Phòng Đào tạo', 'Phòng Công tác sinh viên', 'Phòng Tài chính']
    },
    { 
      title: 'CÁC KHOA', 
      subItems: ['Khoa CNTT', 'Khoa Kinh tế', 'Khoa Ngoại ngữ'] 
    },
    { 
      title: 'CÁC VIỆN', 
      subItems: ['Viện Nghiên cứu', 'Viện Đào tạo quốc tế'] 
    },
    { 
      title: 'CÁC TRUNG TÂM', 
      subItems: ['TT Thông tin thư viện', 'TT Ngoại ngữ'] 
    },
    { 
      title: 'CÁC PHÂN HIỆU', 
      subItems: ['Phân hiệu A', 'Phân hiệu B'] 
    },
    { 
      title: 'ĐOÀN THỂ', 
      subItems: ['Đoàn thanh niên', 'Hội sinh viên'] 
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="bg-blue-800 text-white w-60 min-h-[600px]">
      <div className="p-4 font-bold bg-blue-900 text-center border-b border-blue-700">
        CƠ CẤU TỔ CHỨC
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li 
            key={index}
            className="relative border-b border-blue-700"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-4 flex justify-between items-center hover:bg-blue-700 cursor-pointer">
              {item.title}
              <span className="text-lg">›</span>
            </div>
            {activeMenu === index && (
              <div className="absolute left-full top-0 bg-white text-blue-800 shadow-lg z-10 w-48">
                {item.subItems.map((subItem, subIndex) => (
                  <div 
                    key={subIndex} 
                    className="p-3 hover:bg-blue-100 cursor-pointer border-b border-gray-200"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
