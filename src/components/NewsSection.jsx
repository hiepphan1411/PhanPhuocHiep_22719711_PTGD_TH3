import React from 'react';

const NewsSection = () => {
  const announcements = [
    {
      title: 'Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025',
      date: '24-04-2025',
      isNew: true
    },
    {
      title: 'Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội...',
      date: '21-04-2025',
      isNew: true
    }
  ];

  const admissions = [
    {
      title: 'Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình...',
      date: '28-03-2025'
    },
    {
      title: 'Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025',
      date: '20-03-2025'
    }
  ];

  const news = [
    {
      title: 'AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp...',
      date: '25-04-2025',
      isNew: true
    },
    {
      title: 'Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong...',
      date: '22-04-2025',
      isNew: true
    }
  ];

  const international = [
    {
      title: 'Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc...',
      date: '24-03-2025'
    },
    {
      title: 'Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus',
      date: '19-03-2025'
    }
  ];

  const NewsItem = ({ item }) => (
    <div className="flex items-start mb-4">
      <span className="text-red-600 mr-2">›</span>
      <div>
        <div className="flex items-center">
          <a href='#'>
            <p className="font-medium">{item.title}</p>
            {item.isNew && (
              <span className="ml-2 bg-red-600 text-white text-xs px-2 rounded-sm">NEW</span>
            )}
          </a>
        </div>
        <p className="text-gray-500 text-sm">{item.date}</p>
      </div>
    </div>
  );

  const SectionTitle = ({ title, viewAllLink }) => (
    <div className="flex justify-between items-center mb-4 border-b-2 border-gray-300 pb-2">
      <h2 className="text-lg font-bold text-blue-900">{title}</h2>
      <a
        href={viewAllLink}
        className="bg-gray-300 text-gray-700 px-3 py-1 text-sm"
      >
        xem tất cả
      </a>
    </div>
  );

  return (
    <div className="flex-1 grid grid-cols-2 gap-8 p-4">
      {/* Announcements and Admissions Section */}
      <div>
        <div className="mb-8">
          <SectionTitle title="THÔNG BÁO" viewAllLink="#" />
          <div>
            {announcements.map((item, index) => (
              <NewsItem key={`announcement-${index}`} item={item} />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle title="TUYỂN SINH" viewAllLink="#" />
          <div>
            {admissions.map((item, index) => (
              <NewsItem key={`admission-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* News and International Section */}
      <div>
        <div className="mb-8">
          <SectionTitle title="TIN TỨC - SỰ KIỆN" viewAllLink="#" />
          <div>
            {news.map((item, index) => (
              <NewsItem key={`news-${index}`} item={item} />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle title="HỢP TÁC QUỐC TẾ" viewAllLink="#" />
          <div>
            {international.map((item, index) => (
              <NewsItem key={`international-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
