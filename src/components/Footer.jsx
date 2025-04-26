import React from 'react';
import { FaFacebookSquare, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-8 bg-gray-100 text-gray-800">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap">
          {/* Contact Information */}
          <div className="md:w-1/4 p-3">
            <h3 className="text-red-800 font-bold mb-3">LIÊN HỆ</h3>
            <p className="font-bold">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
            <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
            <p>Điện thoại: <a href="tel:02838940390" className="text-blue-600">028 38940 390</a> - 100</p>
            <p>
              Tuyển sinh: <a href="tel:02839851932" className="text-blue-600">028 3985 1932</a> - 
              <a href="tel:02838955858" className="text-blue-600"> 028 3895 5858</a> - 
              <a href="tel:02839851917" className="text-blue-600"> 028 3985 1917</a>
            </p>
            <p>Email: <a href="mailto:dhcn@iuh.edu.vn" className="text-blue-600">dhcn@iuh.edu.vn</a></p>
            <div className="mt-3">
              <img src="../logoIUH.png" alt="IUH Logo" className="h-16" />
            </div>
          </div>
          
          {/* Activities */}
          <div className=" md:w-1/4 p-3">
            <h3 className="text-red-800 font-bold mb-3">HOẠT ĐỘNG KHÁC</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Hoạt động phục vụ cộng đồng</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Sinh viên tình nguyện</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">CLB/Đội/Nhóm sinh viên</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Kết nối doanh nghiệp</a></li>
            </ul>
          </div>
          
          {/* Extended Information */}
          <div className="md:w-1/4 p-3">
            <h3 className="text-red-800 font-bold mb-3">THÔNG TIN MỞ RỘNG</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Báo chí viết về IUH</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Khám phá IUH</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Kỹ năng mềm</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Bộ sưu tập</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Dịch vụ sinh viên</a></li>
            </ul>
          </div>
          
          {/* Useful Documents */}
          <div className="md:w-1/4 p-3">
            <h3 className="text-red-800 font-bold mb-3">VĂN BẢN TIỆN ÍCH</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Quy chế-Quy định-Quy trình</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Ba công khai</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Biểu mẫu đào tạo</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Quản lý khoa học</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Phản hồi</a></li>
            </ul>
          </div>
        </div>
        
        {/* Statistics and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 mt-4 border-t border-gray-300">
          <div className="mb-3 md:mb-0">
            <p>Số lượt truy cập: 288,836,132</p>
            <p>Hôm nay: 22,478 | Đang xem: 85</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Chia sẻ</span>
            <a href="#" className="text-blue-800 mx-1 text-2xl"><FaFacebookSquare /></a>
            <a href="#" className="text-blue-500 mx-1 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-blue-700 mx-1 text-2xl"><FaLinkedin /></a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-4 border-t border-gray-300">
          <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
          <p className="text-sm">Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
