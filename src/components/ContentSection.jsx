import React from 'react';

const ContentSection = () => {
  return (
    <div className="bg-blue-800 py-4">
      <div className="container mx-auto flex sm:flex-row flex-wrap text-white">
        {/* Column 1 */}
        <div className="sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <h2 className="text-xl font-bold uppercase mb-4">PHÂN HIỆU QUẢNG NGÃI</h2>
          <div className="overflow-hidden h-48 border-2 border-white">
            <img 
              src="../ct1.png" 
              alt="Phân hiệu Quảng Ngãi" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <h2 className="text-xl font-bold uppercase mb-4">CƠ SỞ THANH HÓA</h2>
          <div className="overflow-hidden h-48 border-2 border-white">
            <img 
              src="../ct2.png" 
              alt="Cơ sở Thanh Hóa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Column 3 */}
        <div className="sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold uppercase">VIDEO VÀ HÌNH ẢNH</h2>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 text-sm rounded">
              xem tất cả
            </button>
          </div>
          <div className="overflow-hidden h-48 border-2 border-white relative">
            <img 
              src="../ct3.png" 
              alt="Video và hình ảnh" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full p-3">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
