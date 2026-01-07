import React from 'react'

export const renderCategoryIcon = (categoryId: string) => {
  const iconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  }

  switch (categoryId) {
    case 'all':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    case 'getting-started':
      return (
        <svg {...iconProps}>
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      )
    case 'booking':
      return (
        <svg {...iconProps}>
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
          <line x1="16" x2="16" y1="2" y2="6"></line>
          <line x1="8" x2="8" y1="2" y2="6"></line>
          <line x1="3" x2="21" y1="10" y2="10"></line>
        </svg>
      )
    case 'payment':
      return (
        <svg {...iconProps}>
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
      )
    case 'account':
      return (
        <svg {...iconProps}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    case 'cancellation':
      return (
        <svg {...iconProps}>
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
          <path d="M21 3v5h-5"></path>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
          <path d="M3 21v-5h5"></path>
        </svg>
      )
    case 'technical':
      return (
        <svg {...iconProps}>
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      )
    default:
      return null
  }
}

export const categories = [
  { id: 'all', name: 'Tất Cả' },
  { id: 'getting-started', name: 'Bắt Đầu' },
  { id: 'booking', name: 'Đặt Chỗ' },
  { id: 'payment', name: 'Thanh Toán' },
  { id: 'account', name: 'Tài Khoản' },
  { id: 'cancellation', name: 'Hủy & Hoàn Tiền' },
  { id: 'technical', name: 'Kỹ Thuật' }
]

export interface FAQ {
  id: string
  category: string
  question: string
  answer: string
}

export const allFaqs: FAQ[] = [
  {
    id: 'faq-1',
    category: 'getting-started',
    question: 'Làm thế nào để đăng ký tài khoản trên Booking Hub?',
    answer: 'Để đăng ký tài khoản, bạn chỉ cần:\n1. Nhấp vào nút "Đăng Ký" ở góc trên bên phải\n2. Điền thông tin: email, mật khẩu, họ tên\n3. Xác nhận email qua link được gửi đến hộp thư\n4. Đăng nhập và bắt đầu sử dụng dịch vụ\n\nQuá trình đăng ký hoàn toàn miễn phí và chỉ mất vài phút.'
  },
  {
    id: 'faq-2',
    category: 'getting-started',
    question: 'Booking Hub cung cấp những dịch vụ gì?',
    answer: 'Booking Hub là nền tảng tổng hợp cho phép bạn:\n• Đặt vé xem phim tại các rạp chiếu phim\n• Đặt phòng khách sạn và resort\n• Đặt bàn nhà hàng (sắp ra mắt)\n• Mua vé khu vui chơi giải trí (sắp ra mắt)\n\nTất cả trong một ứng dụng duy nhất, tiện lợi và nhanh chóng.'
  },
  {
    id: 'faq-3',
    category: 'booking',
    question: 'Làm thế nào để đặt vé xem phim?',
    answer: 'Để đặt vé xem phim:\n1. Truy cập trang "Phim Ảnh"\n2. Chọn bộ phim bạn muốn xem\n3. Chọn rạp chiếu và suất chiếu phù hợp\n4. Chọn ghế ngồi trên sơ đồ rạp\n5. Xác nhận thông tin và thanh toán\n6. Nhận vé qua email và mã QR\n\nVé sẽ được gửi ngay sau khi thanh toán thành công.'
  },
  {
    id: 'faq-4',
    category: 'booking',
    question: 'Làm thế nào để đặt phòng khách sạn?',
    answer: 'Quy trình đặt phòng khách sạn:\n1. Vào trang "Khách Sạn"\n2. Nhập địa điểm, ngày check-in/check-out\n3. Xem danh sách khách sạn phù hợp\n4. Chọn khách sạn và loại phòng\n5. Điền thông tin khách ở\n6. Thanh toán và nhận mã đặt phòng\n\nBạn sẽ nhận được email xác nhận với mã đặt phòng và thông tin chi tiết.'
  },
  {
    id: 'faq-5',
    category: 'booking',
    question: 'Tôi có thể đặt nhiều ghế cùng lúc không?',
    answer: 'Có, bạn hoàn toàn có thể đặt nhiều ghế cùng lúc:\n• Khi chọn ghế, nhấp vào các ghế bạn muốn\n• Tối đa có thể đặt 8 ghế cho một suất chiếu\n• Tất cả ghế sẽ được tính vào một đơn hàng\n• Bạn chỉ cần thanh toán một lần cho tất cả vé\n\nLưu ý: Các ghế phải cùng một suất chiếu.'
  },
  {
    id: 'faq-6',
    category: 'payment',
    question: 'Booking Hub chấp nhận những phương thức thanh toán nào?',
    answer: 'Chúng tôi chấp nhận các phương thức thanh toán:\n• Thẻ tín dụng/ghi nợ (Visa, Mastercard)\n• Ví điện tử (MoMo, ZaloPay, VNPay)\n• Chuyển khoản ngân hàng\n• Thanh toán trực tuyến an toàn qua cổng thanh toán\n\nTất cả giao dịch được mã hóa và bảo mật theo tiêu chuẩn PCI DSS.'
  },
  {
    id: 'faq-7',
    category: 'payment',
    question: 'Thanh toán có an toàn không?',
    answer: 'Rất an toàn! Booking Hub sử dụng:\n• Công nghệ mã hóa SSL/TLS\n• Xác thực 3D Secure cho thẻ tín dụng\n• Hệ thống thanh toán được chứng nhận PCI DSS\n• Không lưu trữ thông tin thẻ của bạn\n• Mọi giao dịch đều được ghi nhận và bảo vệ\n\nThông tin cá nhân và thanh toán của bạn được bảo mật tuyệt đối.'
  },
  {
    id: 'faq-8',
    category: 'payment',
    question: 'Khi nào tôi sẽ được hoàn tiền nếu hủy đặt chỗ?',
    answer: 'Thời gian hoàn tiền phụ thuộc vào phương thức thanh toán:\n• Thẻ tín dụng: 5-7 ngày làm việc\n• Ví điện tử: 1-3 ngày làm việc\n• Chuyển khoản: 3-5 ngày làm việc\n\nTiền sẽ được hoàn về tài khoản bạn đã sử dụng để thanh toán. Bạn sẽ nhận được email thông báo khi hoàn tiền thành công.'
  },
  {
    id: 'faq-9',
    category: 'account',
    question: 'Làm thế nào để đổi mật khẩu?',
    answer: 'Để đổi mật khẩu:\n1. Đăng nhập vào tài khoản\n2. Vào "Cài Đặt Tài Khoản"\n3. Chọn "Đổi Mật Khẩu"\n4. Nhập mật khẩu cũ và mật khẩu mới\n5. Xác nhận thay đổi\n\nMật khẩu mới phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số.'
  },
  {
    id: 'faq-10',
    category: 'account',
    question: 'Tôi quên mật khẩu, làm sao để lấy lại?',
    answer: 'Nếu quên mật khẩu:\n1. Vào trang đăng nhập\n2. Nhấp "Quên mật khẩu?"\n3. Nhập email đã đăng ký\n4. Kiểm tra email và nhấp vào link đặt lại mật khẩu\n5. Tạo mật khẩu mới\n\nLink đặt lại mật khẩu có hiệu lực trong 24 giờ. Nếu không nhận được email, kiểm tra thư mục spam.'
  },
  {
    id: 'faq-11',
    category: 'cancellation',
    question: 'Tôi có thể hủy đặt chỗ không?',
    answer: 'Có, bạn có thể hủy đặt chỗ:\n\n• Vé phim: Hủy miễn phí trước 2 giờ suất chiếu, hoàn 100% tiền\n• Khách sạn: Tùy chính sách từng khách sạn, thường hủy miễn phí trước 24-48h\n\nĐể hủy:\n1. Vào "Đơn Hàng Của Tôi"\n2. Chọn đơn hàng cần hủy\n3. Nhấp "Hủy Đặt Chỗ"\n4. Xác nhận hủy\n\nBạn sẽ nhận được email xác nhận hủy và thông tin hoàn tiền.'
  },
  {
    id: 'faq-12',
    category: 'cancellation',
    question: 'Chính sách hoàn tiền như thế nào?',
    answer: 'Chính sách hoàn tiền:\n\n• Hủy trước 24h: Hoàn 100%\n• Hủy trước 12h: Hoàn 50%\n• Hủy sau 12h: Không hoàn tiền (trừ trường hợp đặc biệt)\n\nMột số khách sạn có chính sách riêng, bạn sẽ thấy rõ khi đặt phòng. Vé phim có thể hủy miễn phí trước 2 giờ suất chiếu.'
  },
  {
    id: 'faq-13',
    category: 'technical',
    question: 'Website không tải được, tôi nên làm gì?',
    answer: 'Nếu gặp vấn đề kỹ thuật:\n1. Làm mới trang (F5 hoặc Ctrl+R)\n2. Xóa cache trình duyệt\n3. Thử trình duyệt khác (Chrome, Firefox, Edge)\n4. Kiểm tra kết nối internet\n5. Tắt các extension có thể chặn\n\nNếu vẫn không được, liên hệ hỗ trợ kỹ thuật qua email hoặc hotline.'
  },
  {
    id: 'faq-14',
    category: 'technical',
    question: 'Tôi không nhận được email xác nhận, phải làm sao?',
    answer: 'Nếu không nhận được email:\n1. Kiểm tra thư mục Spam/Junk\n2. Đảm bảo email đăng ký chính xác\n3. Kiểm tra dung lượng hộp thư\n4. Thử yêu cầu gửi lại email\n5. Liên hệ hỗ trợ để kiểm tra\n\nChúng tôi sẽ gửi lại email trong vòng 24 giờ. Nếu vẫn không nhận được, vui lòng liên hệ trực tiếp.'
  },
  {
    id: 'faq-15',
    category: 'booking',
    question: 'Tôi có thể đổi suất chiếu sau khi đã đặt vé không?',
    answer: 'Có thể đổi suất chiếu với điều kiện:\n• Đổi trước 2 giờ suất chiếu ban đầu\n• Suất chiếu mới còn chỗ trống\n• Phải trả phí đổi vé (nếu có)\n\nĐể đổi:\n1. Vào "Đơn Hàng Của Tôi"\n2. Chọn vé cần đổi\n3. Nhấp "Đổi Suất Chiếu"\n4. Chọn suất chiếu mới\n5. Thanh toán phí đổi (nếu có)\n\nLưu ý: Mỗi vé chỉ được đổi 1 lần.'
  },
  {
    id: 'faq-16',
    category: 'getting-started',
    question: 'Làm thế nào để đăng nhập vào tài khoản?',
    answer: 'Để đăng nhập:\n1. Nhấp vào nút "Đăng Nhập" ở góc trên bên phải\n2. Nhập email và mật khẩu đã đăng ký\n3. Nhấp "Đăng Nhập"\n\nNếu quên mật khẩu, nhấp "Quên mật khẩu?" để đặt lại. Bạn cũng có thể đăng nhập bằng Google hoặc Facebook nếu đã liên kết tài khoản.'
  },
  {
    id: 'faq-17',
    category: 'getting-started',
    question: 'Tôi có cần tạo tài khoản để đặt chỗ không?',
    answer: 'Có, bạn cần tạo tài khoản để:\n• Lưu thông tin đặt chỗ\n• Xem lịch sử đặt chỗ\n• Nhận thông báo và cập nhật\n• Sử dụng mã giảm giá\n• Quản lý thanh toán dễ dàng hơn\n\nQuá trình đăng ký rất nhanh chóng và miễn phí. Bạn có thể đăng ký bằng email hoặc tài khoản mạng xã hội.'
  },
  {
    id: 'faq-18',
    category: 'getting-started',
    question: 'Booking Hub có ứng dụng di động không?',
    answer: 'Hiện tại Booking Hub đang phát triển ứng dụng di động. Bạn có thể sử dụng website trên trình duyệt di động với giao diện responsive, tối ưu cho mọi thiết bị.\n\nỨng dụng iOS và Android sẽ ra mắt trong thời gian tới. Hãy theo dõi thông báo trên website để cập nhật sớm nhất.'
  },
  {
    id: 'faq-19',
    category: 'getting-started',
    question: 'Làm thế nào để tìm hiểu về các tính năng của Booking Hub?',
    answer: 'Bạn có thể tìm hiểu về các tính năng:\n• Xem phần "Tại Sao Chọn Booking Hub?" trên trang chủ\n• Đọc các hướng dẫn trong Trung tâm Trợ giúp này\n• Xem video hướng dẫn trên kênh YouTube của chúng tôi\n• Liên hệ bộ phận hỗ trợ để được tư vấn\n\nChúng tôi luôn cập nhật tính năng mới và thông báo qua email cho người dùng.'
  },
  {
    id: 'faq-20',
    category: 'booking',
    question: 'Tôi có thể xem thông tin chi tiết về phim trước khi đặt vé không?',
    answer: 'Có, bạn có thể:\n• Xem trailer, poster và mô tả phim\n• Xem đánh giá và điểm số từ người dùng\n• Xem thông tin diễn viên và đạo diễn\n• Xem lịch chiếu tại các rạp\n• Xem giá vé và loại ghế\n\nTất cả thông tin được cập nhật thường xuyên để bạn có quyết định tốt nhất.'
  },
  {
    id: 'faq-21',
    category: 'booking',
    question: 'Làm thế nào để chọn ghế ngồi tốt nhất?',
    answer: 'Khi chọn ghế:\n• Ghế màu xanh: Còn trống, có thể chọn\n• Ghế màu đỏ: Đã được đặt\n• Ghế màu vàng: Ghế VIP hoặc có giá cao hơn\n• Ghế màu xám: Không khả dụng\n\nGợi ý:\n• Ghế giữa hàng giữa: Tầm nhìn tốt nhất\n• Tránh hàng đầu và hàng cuối\n• Xem sơ đồ rạp để chọn vị trí phù hợp'
  },
  {
    id: 'faq-22',
    category: 'booking',
    question: 'Tôi có thể đặt phòng khách sạn cho nhiều người không?',
    answer: 'Có, khi đặt phòng bạn có thể:\n• Chọn số lượng khách (người lớn và trẻ em)\n• Chọn số lượng phòng cần đặt\n• Thêm giường phụ nếu cần\n• Yêu cầu phòng không hút thuốc\n• Yêu cầu phòng tầng cao, view đẹp\n\nLưu ý: Một số khách sạn có giới hạn số người/phòng. Bạn sẽ thấy thông tin này khi chọn phòng.'
  },
  {
    id: 'faq-23',
    category: 'booking',
    question: 'Làm thế nào để xem lịch sử đặt chỗ của tôi?',
    answer: 'Để xem lịch sử đặt chỗ:\n1. Đăng nhập vào tài khoản\n2. Vào "Đơn Hàng Của Tôi" hoặc "Lịch Sử Đặt Chỗ"\n3. Xem tất cả đơn hàng đã đặt\n4. Lọc theo loại dịch vụ (phim, khách sạn)\n5. Xem chi tiết từng đơn hàng\n\nBạn có thể:\n• Xem lại thông tin đặt chỗ\n• Tải lại vé/mã đặt phòng\n• Hủy hoặc đổi đặt chỗ\n• Xem hóa đơn'
  },
  {
    id: 'faq-24',
    category: 'booking',
    question: 'Tôi có thể đặt vé phim cho người khác không?',
    answer: 'Có, bạn có thể đặt vé cho người khác:\n• Nhập tên người sử dụng vé khi đặt\n• Một số rạp yêu cầu xuất trình CMND/CCCD\n• Vé sẽ được gửi đến email của bạn\n• Bạn có thể chuyển vé cho người khác\n\nLưu ý: Một số suất chiếu đặc biệt có thể yêu cầu xác minh danh tính khi vào rạp.'
  },
  {
    id: 'faq-25',
    category: 'booking',
    question: 'Làm thế nào để tìm khách sạn gần địa điểm tôi muốn?',
    answer: 'Để tìm khách sạn:\n1. Vào trang "Khách Sạn"\n2. Nhập địa điểm hoặc chọn trên bản đồ\n3. Chọn ngày check-in/check-out\n4. Chọn số lượng khách và phòng\n5. Sử dụng bộ lọc:\n   - Khoảng giá\n   - Đánh giá sao\n   - Tiện ích (wifi, bể bơi, v.v.)\n   - Khoảng cách từ trung tâm\n\nBạn sẽ thấy danh sách khách sạn phù hợp với bản đồ và đánh giá chi tiết.'
  },
  {
    id: 'faq-26',
    category: 'booking',
    question: 'Tôi có thể đặt nhiều phòng khách sạn cùng lúc không?',
    answer: 'Có, bạn có thể đặt nhiều phòng:\n• Chọn số lượng phòng khi tìm kiếm\n• Hoặc đặt từng phòng riêng lẻ\n• Mỗi phòng có thể có thông tin khách ở khác nhau\n• Tất cả phòng sẽ trong một đơn hàng\n• Thanh toán một lần cho tất cả phòng\n\nLưu ý: Số lượng phòng còn trống phụ thuộc vào khách sạn. Đặt sớm để có nhiều lựa chọn hơn.'
  },
  {
    id: 'faq-27',
    category: 'booking',
    question: 'Làm thế nào để biết phim có phụ đề tiếng Việt không?',
    answer: 'Thông tin về phụ đề:\n• Xem trong phần mô tả phim\n• Biểu tượng "Sub" = Có phụ đề\n• Biểu tượng "Dub" = Lồng tiếng\n• "2D Sub" = Phim 2D có phụ đề\n• "3D Sub" = Phim 3D có phụ đề\n\nBạn cũng có thể xem thông tin này khi chọn suất chiếu. Nếu không rõ, liên hệ hỗ trợ để được tư vấn.'
  },
  {
    id: 'faq-28',
    category: 'payment',
    question: 'Booking Hub có thu phí dịch vụ không?',
    answer: 'Phí dịch vụ:\n• Không có phí ẩn, giá hiển thị là giá cuối cùng\n• Một số rạp phim có thể có phí xử lý nhỏ (5.000-10.000đ)\n• Phí này được hiển thị rõ trước khi thanh toán\n• Khách sạn: Giá đã bao gồm thuế và phí dịch vụ\n\nBạn sẽ thấy tổng tiền chính xác trước khi xác nhận thanh toán.'
  },
  {
    id: 'faq-29',
    category: 'payment',
    question: 'Làm thế nào để sử dụng mã giảm giá?',
    answer: 'Để sử dụng mã giảm giá:\n1. Khi đặt chỗ, tìm ô "Mã Giảm Giá" hoặc "Voucher"\n2. Nhập mã giảm giá\n3. Nhấp "Áp Dụng"\n4. Xem giá đã được giảm\n5. Tiếp tục thanh toán\n\nLưu ý:\n• Mỗi mã chỉ dùng được 1 lần\n• Có thể có điều kiện áp dụng (giá tối thiểu, v.v.)\n• Kiểm tra hạn sử dụng của mã\n• Một số mã chỉ áp dụng cho dịch vụ cụ thể'
  },
  {
    id: 'faq-30',
    category: 'payment',
    question: 'Tôi có thể thanh toán bằng nhiều phương thức không?',
    answer: 'Hiện tại bạn chỉ có thể thanh toán bằng một phương thức cho mỗi đơn hàng:\n• Chọn một phương thức thanh toán\n• Thanh toán toàn bộ số tiền\n\nNếu cần hỗ trợ thanh toán chia nhỏ, vui lòng liên hệ bộ phận hỗ trợ. Chúng tôi đang phát triển tính năng thanh toán trả góp trong tương lai.'
  },
  {
    id: 'faq-31',
    category: 'payment',
    question: 'Làm thế nào để xem hóa đơn điện tử?',
    answer: 'Để xem hóa đơn:\n1. Vào "Đơn Hàng Của Tôi"\n2. Chọn đơn hàng cần xem hóa đơn\n3. Nhấp "Xem Hóa Đơn" hoặc "Tải Hóa Đơn"\n4. Hóa đơn sẽ được tải về dạng PDF\n\nHóa đơn bao gồm:\n• Thông tin đặt chỗ\n• Chi tiết thanh toán\n• Mã số thuế (nếu có)\n• Ngày giờ giao dịch\n\nHóa đơn được gửi tự động qua email sau khi thanh toán thành công.'
  },
  {
    id: 'faq-32',
    category: 'payment',
    question: 'Thanh toán bị lỗi, tôi phải làm gì?',
    answer: 'Nếu thanh toán bị lỗi:\n1. Kiểm tra số dư tài khoản/thẻ\n2. Kiểm tra thông tin thẻ (số thẻ, ngày hết hạn, CVV)\n3. Thử lại thanh toán\n4. Nếu vẫn lỗi, thử phương thức thanh toán khác\n5. Liên hệ ngân hàng nếu thẻ bị khóa\n\nNếu tiền đã bị trừ nhưng đơn hàng chưa thành công:\n• Đợi 5-10 phút, tiền sẽ được hoàn tự động\n• Nếu sau 24h vẫn chưa hoàn, liên hệ hỗ trợ với mã giao dịch'
  },
  {
    id: 'faq-33',
    category: 'payment',
    question: 'Tôi có thể lưu thông tin thẻ để thanh toán nhanh hơn không?',
    answer: 'Hiện tại Booking Hub không lưu trữ thông tin thẻ để đảm bảo an toàn tối đa. Mỗi lần thanh toán bạn cần nhập lại thông tin.\n\nChúng tôi đang phát triển tính năng thanh toán nhanh với:\n• Lưu thẻ an toàn qua token hóa\n• Xác thực bằng vân tay/Face ID\n• Thanh toán một chạm\n\nTính năng này sẽ ra mắt trong thời gian tới.'
  },
  {
    id: 'faq-34',
    category: 'account',
    question: 'Làm thế nào để cập nhật thông tin cá nhân?',
    answer: 'Để cập nhật thông tin:\n1. Đăng nhập vào tài khoản\n2. Vào "Thông Tin Cá Nhân" hoặc "Cài Đặt"\n3. Cập nhật các thông tin:\n   - Họ tên\n   - Số điện thoại\n   - Địa chỉ\n   - Ngày sinh\n4. Nhấp "Lưu Thay Đổi"\n\nLưu ý: Email đăng ký không thể thay đổi. Nếu cần đổi email, liên hệ hỗ trợ.'
  },
  {
    id: 'faq-35',
    category: 'account',
    question: 'Tôi có thể xóa tài khoản không?',
    answer: 'Có, bạn có thể xóa tài khoản:\n1. Vào "Cài Đặt Tài Khoản"\n2. Cuộn xuống phần "Xóa Tài Khoản"\n3. Đọc điều khoản và cảnh báo\n4. Nhập mật khẩu để xác nhận\n5. Nhấp "Xóa Tài Khoản"\n\nLưu ý:\n• Tất cả dữ liệu sẽ bị xóa vĩnh viễn\n• Không thể khôi phục sau khi xóa\n• Đơn hàng đã thanh toán vẫn được lưu trong hệ thống\n• Nếu có đơn hàng đang xử lý, cần hoàn tất trước khi xóa'
  },
  {
    id: 'faq-36',
    category: 'account',
    question: 'Làm thế nào để bảo mật tài khoản tốt hơn?',
    answer: 'Để bảo mật tài khoản:\n• Sử dụng mật khẩu mạnh (8+ ký tự, có chữ hoa, số, ký tự đặc biệt)\n• Không chia sẻ mật khẩu với ai\n• Đăng xuất sau khi sử dụng trên thiết bị công cộng\n• Bật xác thực 2 bước (nếu có)\n• Kiểm tra email thường xuyên để phát hiện hoạt động bất thường\n• Cập nhật mật khẩu định kỳ\n\nNếu phát hiện hoạt động đáng ngờ, liên hệ hỗ trợ ngay.'
  },
  {
    id: 'faq-37',
    category: 'account',
    question: 'Tôi có thể liên kết tài khoản với Facebook/Google không?',
    answer: 'Hiện tại Booking Hub đang phát triển tính năng đăng nhập bằng:\n• Google\n• Facebook\n• Apple ID\n\nKhi tính năng này ra mắt, bạn có thể:\n• Đăng nhập nhanh không cần nhập mật khẩu\n• Đồng bộ thông tin cơ bản\n• Vẫn giữ được tài khoản email hiện tại\n\nHãy theo dõi thông báo để cập nhật sớm nhất.'
  },
  {
    id: 'faq-38',
    category: 'account',
    question: 'Làm thế nào để thay đổi email đăng ký?',
    answer: 'Để thay đổi email:\n1. Liên hệ bộ phận hỗ trợ qua email hoặc hotline\n2. Cung cấp:\n   - Email hiện tại\n   - Email mới muốn đổi\n   - Một số thông tin xác minh danh tính\n3. Chờ xác nhận từ bộ phận hỗ trợ\n4. Xác nhận email mới qua link được gửi\n\nLưu ý: Quá trình này có thể mất 1-2 ngày làm việc để đảm bảo bảo mật.'
  },
  {
    id: 'faq-39',
    category: 'cancellation',
    question: 'Tôi có thể hủy vé phim sau khi đã thanh toán không?',
    answer: 'Có, bạn có thể hủy vé phim:\n• Hủy miễn phí trước 2 giờ suất chiếu\n• Hoàn 100% tiền về tài khoản\n• Hủy sau 2 giờ: Không thể hủy (trừ trường hợp đặc biệt)\n\nĐể hủy:\n1. Vào "Đơn Hàng Của Tôi"\n2. Chọn vé cần hủy\n3. Nhấp "Hủy Vé"\n4. Xác nhận hủy\n\nTiền sẽ được hoàn trong 1-3 ngày làm việc tùy phương thức thanh toán.'
  },
  {
    id: 'faq-40',
    category: 'cancellation',
    question: 'Chính sách hủy phòng khách sạn như thế nào?',
    answer: 'Chính sách hủy phụ thuộc vào từng khách sạn:\n\n• Miễn phí hủy: Hủy trước 24-48h, hoàn 100%\n• Hủy có phí: Hủy trước 24h, mất phí hủy (thường 10-20%)\n• Không hoàn tiền: Hủy sau thời hạn hoặc đặt phòng đặc biệt\n\nBạn sẽ thấy rõ chính sách hủy khi:\n• Xem thông tin phòng\n• Trước khi xác nhận đặt phòng\n• Trong email xác nhận\n\nNên đọc kỹ trước khi đặt để tránh mất phí.'
  },
  {
    id: 'faq-41',
    category: 'cancellation',
    question: 'Tôi có thể hủy một phần đơn hàng không?',
    answer: 'Tùy vào loại đơn hàng:\n\n• Vé phim: Có thể hủy từng vé nếu đặt nhiều vé\n• Phòng khách sạn: Nếu đặt nhiều phòng, có thể hủy từng phòng\n• Đơn hàng combo: Cần hủy toàn bộ hoặc liên hệ hỗ trợ\n\nĐể hủy một phần:\n1. Vào chi tiết đơn hàng\n2. Chọn mục cần hủy\n3. Nhấp "Hủy" cho mục đó\n4. Xác nhận\n\nTiền sẽ được hoàn tương ứng với phần đã hủy.'
  },
  {
    id: 'faq-42',
    category: 'cancellation',
    question: 'Nếu tôi không thể đến, có người khác sử dụng được không?',
    answer: 'Tùy vào loại dịch vụ:\n\n• Vé phim:\n  - Có thể chuyển cho người khác\n  - Một số rạp yêu cầu xuất trình CMND\n  - Gửi mã QR/email vé cho người sử dụng\n\n• Phòng khách sạn:\n  - Cần cập nhật tên khách ở\n  - Liên hệ khách sạn trước để thông báo\n  - Người thay thế cần xuất trình CMND khi check-in\n\nLưu ý: Một số khách sạn không cho phép thay đổi tên khách ở.'
  },
  {
    id: 'faq-43',
    category: 'cancellation',
    question: 'Tôi đã hủy nhưng chưa nhận được tiền hoàn, phải làm gì?',
    answer: 'Thời gian hoàn tiền:\n• Ví điện tử: 1-3 ngày làm việc\n• Thẻ tín dụng: 5-7 ngày làm việc\n• Chuyển khoản: 3-5 ngày làm việc\n\nNếu quá thời hạn:\n1. Kiểm tra email xác nhận hủy\n2. Kiểm tra tài khoản ngân hàng/ví\n3. Liên hệ hỗ trợ với:\n   - Mã đơn hàng\n   - Ngày hủy\n   - Phương thức thanh toán\n   - Số tiền cần hoàn\n\nChúng tôi sẽ kiểm tra và xử lý trong 24-48h.'
  },
  {
    id: 'faq-44',
    category: 'technical',
    question: 'Trình duyệt nào được hỗ trợ tốt nhất?',
    answer: 'Booking Hub hỗ trợ tốt trên:\n• Google Chrome (khuyến nghị)\n• Microsoft Edge\n• Mozilla Firefox\n• Safari (iOS/Mac)\n• Opera\n\nYêu cầu:\n• Phiên bản trình duyệt mới nhất\n• Bật JavaScript\n• Cho phép cookies\n• Kết nối internet ổn định\n\nNếu gặp vấn đề, thử:\n• Cập nhật trình duyệt\n• Xóa cache và cookies\n• Tắt các extension chặn'
  },
  {
    id: 'faq-45',
    category: 'technical',
    question: 'Tôi không thể đăng nhập, phải làm gì?',
    answer: 'Nếu không thể đăng nhập:\n1. Kiểm tra email và mật khẩu có đúng không\n2. Kiểm tra Caps Lock có bật không\n3. Thử "Quên mật khẩu?" để đặt lại\n4. Xóa cache và cookies trình duyệt\n5. Thử trình duyệt khác\n6. Kiểm tra kết nối internet\n\nNếu vẫn không được:\n• Tài khoản có thể bị khóa tạm thời\n• Liên hệ hỗ trợ với email đăng ký\n• Cung cấp thông tin để xác minh danh tính'
  },
  {
    id: 'faq-46',
    category: 'technical',
    question: 'Website chạy chậm, tôi nên làm gì?',
    answer: 'Nếu website chạy chậm:\n1. Kiểm tra tốc độ internet\n2. Đóng các tab không cần thiết\n3. Xóa cache trình duyệt\n4. Tắt các extension không cần thiết\n5. Thử trình duyệt khác\n6. Kiểm tra có đang tải file lớn không\n\nNếu vẫn chậm:\n• Có thể do lượng truy cập cao\n• Thử lại sau vài phút\n• Liên hệ hỗ trợ nếu vấn đề kéo dài\n\nChúng tôi luôn cố gắng tối ưu tốc độ website.'
  },
  {
    id: 'faq-47',
    category: 'technical',
    question: 'Tôi không nhận được mã QR vé phim, phải làm sao?',
    answer: 'Nếu không nhận được mã QR:\n1. Kiểm tra email (kể cả thư mục Spam)\n2. Vào "Đơn Hàng Của Tôi" để xem lại\n3. Nhấp "Gửi Lại Mã QR" nếu có\n4. Kiểm tra số điện thoại đã đăng ký\n\nNếu vẫn không có:\n• Liên hệ hỗ trợ với mã đơn hàng\n• Cung cấp thông tin đặt chỗ\n• Chúng tôi sẽ gửi lại mã QR ngay\n\nLưu ý: Mã QR có thể được hiển thị ngay trên website sau khi thanh toán thành công.'
  },
  {
    id: 'faq-48',
    category: 'technical',
    question: 'Làm thế nào để báo lỗi hoặc góp ý?',
    answer: 'Bạn có thể báo lỗi/góp ý qua:\n\n1. Email: manhtrana1k45tl@gmail.com\n   - Mô tả chi tiết vấn đề\n   - Kèm ảnh chụp màn hình (nếu có)\n   - Thông tin trình duyệt và thiết bị\n\n2. Hotline: +84 389 891 942\n   - Gọi trong giờ hành chính\n   - Mô tả vấn đề cho nhân viên\n\n3. Form phản hồi trên website\n   - Vào "Liên Hệ" hoặc "Góp Ý"\n   - Điền form và gửi\n\nChúng tôi sẽ phản hồi trong 24-48h và cảm ơn mọi đóng góp của bạn!'
  },
  {
    id: 'faq-49',
    category: 'technical',
    question: 'Tôi có thể sử dụng Booking Hub trên điện thoại không?',
    answer: 'Có, Booking Hub hoàn toàn tương thích với điện thoại:\n• Giao diện responsive tự động điều chỉnh\n• Tất cả tính năng đều hoạt động\n• Thanh toán dễ dàng trên mobile\n• Nhận thông báo qua email/SMS\n\nTrình duyệt hỗ trợ:\n• Chrome Mobile (Android/iOS)\n• Safari (iOS)\n• Samsung Internet\n• Firefox Mobile\n\nỨng dụng di động sẽ ra mắt trong tương lai để trải nghiệm tốt hơn.'
  },
  {
    id: 'faq-50',
    category: 'technical',
    question: 'Làm thế nào để tắt thông báo email từ Booking Hub?',
    answer: 'Để quản lý thông báo email:\n1. Đăng nhập vào tài khoản\n2. Vào "Cài Đặt" > "Thông Báo"\n3. Tùy chọn các loại thông báo:\n   - Xác nhận đặt chỗ\n   - Nhắc nhở trước suất chiếu/check-in\n   - Khuyến mãi và ưu đãi\n   - Cập nhật dịch vụ\n4. Bật/tắt từng loại theo nhu cầu\n5. Lưu thay đổi\n\nLưu ý: Một số thông báo quan trọng (xác nhận thanh toán) không thể tắt để đảm bảo bạn nhận được thông tin cần thiết.'
  }
]

export const getPopularFaqs = (faqs: FAQ[]): FAQ[] => {
  const popularIds = ['faq-1', 'faq-3', 'faq-4', 'faq-6', 'faq-7', 'faq-11', 'faq-10', 'faq-23', 'faq-39']
  return popularIds
    .map(id => faqs.find(f => f.id === id))
    .filter((faq): faq is FAQ => faq !== undefined)
}