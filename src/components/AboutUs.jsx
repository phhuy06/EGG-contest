import React from 'react';
import image from "../assets/Image/egg.jpg";
import { TitleWithLines } from "../index";

// Danh sách thành viên
const members = [
  {
    name: 'Nguyễn Tuấn Đạt',
    role: 'Chủ nhiệm',
    avatarUrl: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/462729190_3476381222670115_6122579381012368659_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=RVViu_A-T7sQ7kNvgF4PlJF&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=A_QG5otjSzph64-paWrJGN0&oh=00_AYCpdK8_7Olr6VTd5JlNtS0e7Crkl7ne5r_9QgC0FWsK9w&oe=673BEDF8'
  },
  {
    name: 'Trương Linh Duyên',
    role: 'Phó chủ nhiệm',
    avatarUrl: 'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/434360874_1812273555956431_2483634778394603282_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=1e3IQckF-kIQ7kNvgGWR8GH&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=A5Q-p7ARJiafr8kI4J8Kibn&oh=00_AYC7T5FeqMjrfAAYp2eRD5__Zk1V715xGoL4GS4MbkNANg&oe=673BCA15'
  },
  {
    name: 'Nguyễn Hoàng Việt',
    role: 'Trưởng ban Giáo dục',
    avatarUrl: 'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/409425306_1073235627343246_6567528382444426712_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=8EzUFtSY-H8Q7kNvgFvLIJ7&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AM724fkXz_NPk0jtFJWW9QO&oh=00_AYB9y5zuN4g40wBfylWNUXBwlPJUhPbDaESLF8a5BkmIwQ&oe=673BC5D4'
  },
  {
    name: 'Tạ Tuấn Hải',
    role: 'Phó ban Giáo dục',
    avatarUrl: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/276277787_1821907581338300_2501686689601714541_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=J63ruSXNlwMQ7kNvgF2TdkD&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=ADI_7UVC5k-VIZQjNfG-9HI&oh=00_AYAjItI1B63Qv4RMncBHWsXKFlWK-sLYRG5vL-N_W8hZhw&oe=673BF60B'
  },

  {
    name: 'Trần Ngọc Bảo',
    role: 'Trưởng ban Truyền thông',
    avatarUrl: 'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/459165997_482993794561411_2020990807594401163_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kFxngHDfjHYQ7kNvgGRsaDd&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=ABEbcmg0gm2mrybFaiEFqdC&oh=00_AYA24JGVniDxpyr1eClGviptATYqENzaFaCtWg6-sDApXw&oe=673BC1E0'
  },
  {
    name: 'Nghiêm Thị Hạnh',
    role: 'Phó ban Truyền thông',
    avatarUrl: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/461200852_930997859072050_1918972675750199202_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Eme3kKaOqQsQ7kNvgG0MyVf&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AvWcPZo_XxU1kg9ni9n4VnA&oh=00_AYDyVMMNnOIan14AmIpsBybchXAkOd4NFf0JSBxWiiMs2A&oe=673BC2CE'
  },
];
const AboutUs = () => {

  return (
    <div>
      {TitleWithLines("About Us")}
      <div className='md:flex mt-4 mb-16 gap-16'>
        <div className='flex-1 text-center'>
          <h2 className='text-xl font-bold my-4' style={{ marginTop: '30px' }}>Giới thiệu</h2>
          <p style={{ marginTop: '60px' }}>EGG là nơi tập hợp những sinh viên đam mê lập trình, sáng tạo, và luôn khao khát chinh phục những thử thách mới. Được thành lập từ năm 2013, EGG đã trở thành mái nhà chung cho nhiều bạn trẻ từ khắp các trường đại học trên địa bàn Hà Nội. Mỗi thành viên đều mang một cá tính riêng, góp phần tạo nên một EGG đầy màu sắc, sáng tạo và tràn đầy năng lượng.</p>
        </div>
        <div className='flex-1'>
          <img src={image} alt="Slider" className='border rounded-[14px] w-full h-auto' />
        </div>
      </div>

      <div className=' mb-16'>
        <h2 className='text-xl font-bold my-4 text-center'>Thành tích clb</h2>
        {/*<p className="text-lg text-center">Đây là phần flex thành tích clb</p>*/}
        <div className='md:flex mt-4 mb-16 gap-16'>
          <div className='flex-1'>
            <img src={"https://www.gdsc-uit.club/images/trophy-cloud.png"} alt="Sliders" className='border rounded-[14px] w-full h-auto' />
          </div>
          <div className='flex-1 '>
            <h1 className='text-4xl font-bold my-4 text-center' style={{ marginTop: '100px' }}>
              <span>EGG </span>
              <span className="text-[#4285F4]">C</span>
              <span className="text-[#DB4437]">L</span>
              <span className="text-[#F4B400]">U</span>
              <span className="text-[#0F9D58]">B</span>
            </h1>

            <div className="contentAward text-xl my-8 flex flex-col justify-center items-start">
              <div>
                <span>• </span>
                <span className="text-primary font-bold">Top 8</span> TechStart - HUST, 2023
              </div>
              <div>
                <span>• </span>
                <span className="text-primary font-bold">Giải Ba</span> Coding Inspiration tại FPT, 2023
              </div>
              <div>
                <span>• </span>
                <span className="text-primary font-bold">Top 4</span> tại Tech Club Championship, 2023
              </div>
              <div>
                <span>• </span>
                <span className="text-primary font-bold">Giải Nhất </span> Sinh viên với ý tưởng sáng tạo SCIC, 2023
              </div>
              <div>
                <span>• </span>
                <span className="text-primary font-bold">Huy chương đồng</span> ICPC Châu Á Thái Bình Dương, 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center mb-16'>
        <h2 className='text-xl font-bold my-8'>Ban chủ nhiệm hiện tại</h2>
        <div className='grid grid-cols-2 gap-x-8 md:flex items-center justify-around '>
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={member.avatarUrl} alt={member.name} className="w-24 h-24 rounded-full" />
              <div className="text-center border-2 border-primaryColor bg-secondaryColor shadow-lg rounded-lg w-32 h-40 mt-2 p-2">
                <h3 className="font-bold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;