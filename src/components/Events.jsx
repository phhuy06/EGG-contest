import React, { useState } from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import congrat from '../assets/Image/congr.jpg'
import firstMeeting from '../assets/Image/firstmeeting.jpg'
import nobel from '../assets/Image/nobel.jpg'

import React, { useState } from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import congrat from '../assets/Image/congr.jpg'
import firstMeeting from '../assets/Image/firstmeeting.jpg'
import nobel from '../assets/Image/nobel.jpg'

import { TitleWithLines } from '../index'

const Post = () => {
  const posts = [
    {
      title: 'Recap first meeting Gen 8',
      image: firstMeeting,
      content: `✨ Chủ nhật vừa qua, buổi First Meeting Gen 8 của chúng mình đã được diễn ra thành công tại công viên Thống Nhất, đánh dấu bước khởi đầu cho một hành trình mới đầy hứa hẹn.
      🎉Sự ngại ngùng ban đầu nhanh chóng tan biến nhờ không khí sôi động và sự nhiệt tình của tất cả mọi người. Ban truyền thông của CLB đã chuẩn bị các trò chơi rất vui giúp chúng mình thêm gắn kết và hiểu nhau hơn. Tại buổi gặp mặt, anh Đạt - chủ nhiệm của CLB cũng đã chia sẻ về tầm nhìn và các hoạt động sắp tới của CLB trong thời gian tới giúp chúng mình tiếp động lực để tất cả cùng nhau xây dựng một một nhiệm kỳ mới thành công. 
      💡Sắp tới, buổi training DSA đầu tiên cũng sẽ được diễn ra, hứa hẹn sẽ là một buổi học đầy thú vị và bổ ích dành cho tất cả thành viên. 
      Hy vọng rằng qua First Meeting và những hoạt động sắp tới, mọi người có những kỉ niệm khó quên cùng EGG! ❤️
      📸Hãy cùng chúng mình nhìn lại những khoảnh khắc đẹp của ngày hôm ấy nhé!,`,
    },
    {
      title:
        'Recap tech club championship 2024 & chúc mừng đội thi của egg club đạt giải nhất tech club championship 2024',
      image: congrat,
      content: `✨Sáng ngày 12/05/2024, tại tầng 4 trung tâm thương mại Mac Plaza đã diễn ra Vòng Chung kết cuộc thi TECH CLUB CHAMPIONSHIP 2024. Đây là cuộc thi do 3 CLB sinh viên lớn về lập trình trên địa bàn Hà Nội cùng hợp tác tổ chức:
❗CLB IT PTIT - Học viện Công nghệ Bưu Chính Viễn thông
❗CLB Tin học - Trường Đại học Công nghiệp Hà Nội
❗CLB Sáng tạo công nghệ EGG - Trường CNTT & TT - ĐH Bách Khoa Hà Nội
✨Hành trình chinh phục những bài code hóc búa đã chính thức khép lại, Tech Club Championship 2024 đã chính thức hạ màn sau những giờ thi đấu đầy căng thẳng và bùng nổ của 47 đội thi tài năng từ 17 CLB, đến từ khắp các trường đại học, cùng 141 thí sinh xuất sắc đã cống hiến những màn tranh tài mãn nhãn và đầy kịch tính.
🌟Coding Wizards – Đội thi có sự góp mặt của 3 thành viên CLB EGG đã giành giải Nhất cuộc thi. Thành tích tuyệt vời này là minh chứng cho sự cống hiến, nỗ lực không ngừng nghỉ và tinh thần làm việc nhóm tuyệt vời của các bạn. Chúng mình tự hào về các bạn và hy vọng rằng đây chỉ là bước khởi đầu cho những thành công rực rỡ hơn trong tương lai!
💝Thay mặt BTC, xin gửi lời cảm ơn chân thành và sâu sắc nhất đến Quý nhà tài trợ, khoa CNTT1 - Học viện Công nghệ Bưu chính Viễn thông và tất cả các bạn trong BTC đã luôn ủng hộ và đồng hành với cuộc thi xuyên suốt thời gian qua. Hy vọng rằng trong tương lai, chúng ta sẽ tiếp tục có cơ hội hợp tác và phát triển hơn nữa!
💖Bên cạnh đó, chúng mình cũng xin chúc toàn thể các bạn thí sinh sẽ tiếp tục gặt hái những thành công mới trên chặng đường sắp tới. Hẹn gặp lại các bạn tại những cuộc thi lập trình đầy hứa hẹn tiếp theo!`,
    },
    {
      title: 'Giải nobel vật lý 2024 vinh danh công nghệ học máy',
      image: nobel,
      content: `Chiều ngày 8/10, Viện Hàn lâm Khoa học Hoàng gia Thụy Điển đã quyết định trao Giải Nobel Vật lý năm 2024 cho John J. Hopfield và Geoffrey E. Hinton “vì những khám phá và phát minh nền tảng cho phép học máy sử dụng mạng nơ-ron nhân tạo.”
Hai nhà vật lý được trao giải năm nay, John Hopfield và Geoffrey Hinton, đã sử dụng các công cụ từ vật lý để xây dựng các phương pháp đặt nền tảng cho các hệ thống học máy mạnh mẽ ngày nay. Hopfield đã tạo ra một cấu trúc có khả năng lưu trữ và tái tạo thông tin. Hinton đã phát minh ra một phương pháp có thể tự động phát hiện các đặc tính trong dữ liệu, phương pháp này đã trở nên quan trọng cho các mạng nơ-ron nhân tạo lớn hiện đang được sử dụng.
Mặc dù máy tính không thể suy nghĩ, nhưng các máy móc ngày nay có thể bắt chước các chức năng như trí nhớ và học tập. Các nhà vật lý đoạt giải Nobel năm 2024 đã góp phần làm cho điều này trở nên khả thi. Bằng cách sử dụng các khái niệm và phương pháp cơ bản từ vật lý, họ đã phát triển các công nghệ sử dụng các cấu trúc trong mạng để xử lý thông tin.
Nguồn ảnh: Nobel Prize`,
    },
  ]

  const [activePost, setActivePost] = useState(null)
  const posts = [
    {
      title: 'Recap first meeting Gen 8',
      image: firstMeeting,
      content: `✨ Chủ nhật vừa qua, buổi First Meeting Gen 8 của chúng mình đã được diễn ra thành công tại công viên Thống Nhất, đánh dấu bước khởi đầu cho một hành trình mới đầy hứa hẹn.
      🎉Sự ngại ngùng ban đầu nhanh chóng tan biến nhờ không khí sôi động và sự nhiệt tình của tất cả mọi người. Ban truyền thông của CLB đã chuẩn bị các trò chơi rất vui giúp chúng mình thêm gắn kết và hiểu nhau hơn. Tại buổi gặp mặt, anh Đạt - chủ nhiệm của CLB cũng đã chia sẻ về tầm nhìn và các hoạt động sắp tới của CLB trong thời gian tới giúp chúng mình tiếp động lực để tất cả cùng nhau xây dựng một một nhiệm kỳ mới thành công. 
      💡Sắp tới, buổi training DSA đầu tiên cũng sẽ được diễn ra, hứa hẹn sẽ là một buổi học đầy thú vị và bổ ích dành cho tất cả thành viên. 
      Hy vọng rằng qua First Meeting và những hoạt động sắp tới, mọi người có những kỉ niệm khó quên cùng EGG! ❤️
      📸Hãy cùng chúng mình nhìn lại những khoảnh khắc đẹp của ngày hôm ấy nhé!,`,
    },
    {
      title:
        'Recap tech club championship 2024 & chúc mừng đội thi của egg club đạt giải nhất tech club championship 2024',
      image: congrat,
      content: `✨Sáng ngày 12/05/2024, tại tầng 4 trung tâm thương mại Mac Plaza đã diễn ra Vòng Chung kết cuộc thi TECH CLUB CHAMPIONSHIP 2024. Đây là cuộc thi do 3 CLB sinh viên lớn về lập trình trên địa bàn Hà Nội cùng hợp tác tổ chức:
❗CLB IT PTIT - Học viện Công nghệ Bưu Chính Viễn thông
❗CLB Tin học - Trường Đại học Công nghiệp Hà Nội
❗CLB Sáng tạo công nghệ EGG - Trường CNTT & TT - ĐH Bách Khoa Hà Nội
✨Hành trình chinh phục những bài code hóc búa đã chính thức khép lại, Tech Club Championship 2024 đã chính thức hạ màn sau những giờ thi đấu đầy căng thẳng và bùng nổ của 47 đội thi tài năng từ 17 CLB, đến từ khắp các trường đại học, cùng 141 thí sinh xuất sắc đã cống hiến những màn tranh tài mãn nhãn và đầy kịch tính.
🌟Coding Wizards – Đội thi có sự góp mặt của 3 thành viên CLB EGG đã giành giải Nhất cuộc thi. Thành tích tuyệt vời này là minh chứng cho sự cống hiến, nỗ lực không ngừng nghỉ và tinh thần làm việc nhóm tuyệt vời của các bạn. Chúng mình tự hào về các bạn và hy vọng rằng đây chỉ là bước khởi đầu cho những thành công rực rỡ hơn trong tương lai!
💝Thay mặt BTC, xin gửi lời cảm ơn chân thành và sâu sắc nhất đến Quý nhà tài trợ, khoa CNTT1 - Học viện Công nghệ Bưu chính Viễn thông và tất cả các bạn trong BTC đã luôn ủng hộ và đồng hành với cuộc thi xuyên suốt thời gian qua. Hy vọng rằng trong tương lai, chúng ta sẽ tiếp tục có cơ hội hợp tác và phát triển hơn nữa!
💖Bên cạnh đó, chúng mình cũng xin chúc toàn thể các bạn thí sinh sẽ tiếp tục gặt hái những thành công mới trên chặng đường sắp tới. Hẹn gặp lại các bạn tại những cuộc thi lập trình đầy hứa hẹn tiếp theo!`,
    },
    {
      title: 'Giải nobel vật lý 2024 vinh danh công nghệ học máy',
      image: nobel,
      content: `Chiều ngày 8/10, Viện Hàn lâm Khoa học Hoàng gia Thụy Điển đã quyết định trao Giải Nobel Vật lý năm 2024 cho John J. Hopfield và Geoffrey E. Hinton “vì những khám phá và phát minh nền tảng cho phép học máy sử dụng mạng nơ-ron nhân tạo.”
Hai nhà vật lý được trao giải năm nay, John Hopfield và Geoffrey Hinton, đã sử dụng các công cụ từ vật lý để xây dựng các phương pháp đặt nền tảng cho các hệ thống học máy mạnh mẽ ngày nay. Hopfield đã tạo ra một cấu trúc có khả năng lưu trữ và tái tạo thông tin. Hinton đã phát minh ra một phương pháp có thể tự động phát hiện các đặc tính trong dữ liệu, phương pháp này đã trở nên quan trọng cho các mạng nơ-ron nhân tạo lớn hiện đang được sử dụng.
Mặc dù máy tính không thể suy nghĩ, nhưng các máy móc ngày nay có thể bắt chước các chức năng như trí nhớ và học tập. Các nhà vật lý đoạt giải Nobel năm 2024 đã góp phần làm cho điều này trở nên khả thi. Bằng cách sử dụng các khái niệm và phương pháp cơ bản từ vật lý, họ đã phát triển các công nghệ sử dụng các cấu trúc trong mạng để xử lý thông tin.
Nguồn ảnh: Nobel Prize`,
    },
  ]

  const [activePost, setActivePost] = useState(null)
  return (
    <div>
      {TitleWithLines('Events')}
      <div className="grid grid-cols-1 my-20 md:grid-cols-3 gap-24 mb-16 ">
        {activePost !== null ? (
          <div className="col-span-1 md:col-span-3">
            <div className="relative rounded-lg overflow-hidden shadow-lg p-4 bg-white w-full">
              <button onClick={() => setActivePost(null)} className="text-red-500 text-sm font-bold mb-2">
                <IoArrowBackCircleOutline size={'24px'} className="cursor-pointer" />
              </button>
              <h3 className="text-36 font-bold mb-2">{posts[activePost].title}</h3>
              <div className="flex justify-center items-center">
                <img src={posts[activePost].image} alt="Post Image" className="rounded-md mb-4 h-80 object-contain" />
              </div>
              <p className="text-gray-600 whitespace-pre-line">{posts[activePost].content}</p>
            </div>
          </div>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setActivePost(index)}>
              <img src={post.image} alt="Post's Image" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80"></div>
              <div className="absolute bottom-0 p-2 text-white">
                <h3 className="truncate text-sm font-bold bg-gradient-to-r from-custom-red opacity-80 py-1 rounded">
                  {post.title}
                </h3>
                <p className="text-sm truncate">{post.content}</p>
              </div>
            </div>
          ))
        )}
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setActivePost(index)}>
              <img src={post.image} alt="Post's Image" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80"></div>
              <div className="absolute bottom-0 p-2 text-white">
                <h3 className="truncate text-sm font-bold bg-gradient-to-r from-custom-red opacity-80 py-1 rounded">
                  {post.title}
                </h3>
                <p className="text-sm truncate">{post.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Post
