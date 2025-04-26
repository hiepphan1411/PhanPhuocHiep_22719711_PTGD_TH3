import { useState } from 'react';
import MenuItem from './MenuItem';

const Navbar = () => {
  const menuItems = [
    {
      title: 'GIỚI THIỆU',
      subItems: [
        { title: 'Giới thiệu chung' },
        { title: 'Tầm nhìn - Sứ mạng - Mục tiêu chiến lược' },
        { title: 'Triết lý giáo dục' },
        { title: 'Phương châm hoạt động' },
        { title: 'Giá trị cốt lõi' },
        { title: 'Chính sách chất lượng' },
        { title: 'Sơ đồ bộ máy tổ chức' },
        { title: 'Cơ sở vật chất' },
        { title: 'Đội ngũ' },
        { title: 'Ba công khai' },
        { title: 'Hệ thống nhận diện' },
      ]
    },
    {
      title: 'ĐÀO TẠO',
      subItems: [
        { title: 'Chương trình đào tạo' },
        { title: 'Đào tạo đại học' },
        { title: 'Đào tạo sau đại học' },
      ]
    },
    {
      title: 'TUYỂN SINH',
      subItems: [
        { title: 'Tuyển sinh đại học' },
        { title: 'Tuyển sinh sau đại học' },
      ]
    },
    {
      title: 'NGHIÊN CỨU',
      subItems: []
    },
    {
      title: 'SINH VIÊN',
      subItems: []
    },
    {
      title: 'GIẢNG VIÊN',
      subItems: []
    },
    {
      title: 'VĂN BẰNG',
      subItems: []
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-4">
      <div className="flex items-center">
        <a href="/" className="flex items-center p-3 bg-blue-800 text-white">
          <span className="text-xl">
            <i className="fas fa-home"></i>
          </span>
        </a>
        <div className="flex">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        <div className="ml-auto px-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="py-1 px-3 border rounded-md pr-8"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
