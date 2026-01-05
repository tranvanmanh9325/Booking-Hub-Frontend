import React from 'react'

interface PrivacySectionsPart1Props {
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>
}

const PrivacySectionsPart1: React.FC<PrivacySectionsPart1Props> = ({ sectionRefs }) => {
  return (
    <>
      <div
        id="section-1"
        ref={(el) => { sectionRefs.current['section-1'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">1. Giới Thiệu</h2>
        <p className="privacy-text">
          Chào mừng bạn đến với Booking Hub! Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ, chia sẻ, và bảo vệ thông tin của bạn khi bạn sử dụng dịch vụ của chúng tôi.
        </p>
        <p className="privacy-text">
          Bằng việc sử dụng dịch vụ Booking Hub, bạn đồng ý với việc thu thập, sử dụng, và chia sẻ thông tin của bạn theo chính sách bảo mật này. Nếu bạn không đồng ý với bất kỳ phần nào của chính sách này, vui lòng không sử dụng dịch vụ của chúng tôi.
        </p>
        <p className="privacy-text">
          Chúng tôi khuyến khích bạn đọc kỹ chính sách bảo mật này để hiểu rõ cách chúng tôi xử lý thông tin của bạn. Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi thông qua thông tin liên hệ được cung cấp ở cuối chính sách này.
        </p>
      </div>

      <div
        id="section-2"
        ref={(el) => { sectionRefs.current['section-2'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">2. Thông Tin Chúng Tôi Thu Thập</h2>
        <h3 className="privacy-subtitle">2.1. Thông Tin Cá Nhân</h3>
        <p className="privacy-text">
          Chúng tôi thu thập thông tin cá nhân mà bạn cung cấp trực tiếp cho chúng tôi khi bạn:
        </p>
        <ul className="privacy-list">
          <li><strong>Đăng ký tài khoản:</strong> Tên, địa chỉ email, số điện thoại, mật khẩu, và các thông tin nhận dạng khác</li>
          <li><strong>Cập nhật hồ sơ:</strong> Địa chỉ, ngày sinh, giới tính, sở thích, và các thông tin cá nhân khác</li>
          <li><strong>Đặt chỗ:</strong> Thông tin về đặt chỗ của bạn, bao gồm loại dịch vụ, ngày giờ, địa điểm, số lượng người, và các yêu cầu đặc biệt</li>
          <li><strong>Thanh toán:</strong> Thông tin thanh toán (được xử lý bởi các nhà cung cấp dịch vụ thanh toán an toàn của bên thứ ba)</li>
          <li><strong>Liên hệ với chúng tôi:</strong> Nội dung tin nhắn, email, hoặc các thông tin khác mà bạn gửi cho chúng tôi</li>
        </ul>
        <h3 className="privacy-subtitle">2.2. Thông Tin Tự Động Thu Thập</h3>
        <p className="privacy-text">
          Khi bạn sử dụng dịch vụ của chúng tôi, chúng tôi tự động thu thập một số thông tin, bao gồm:
        </p>
        <ul className="privacy-list">
          <li><strong>Thông tin thiết bị:</strong> Loại thiết bị, hệ điều hành, trình duyệt, phiên bản phần mềm, và các thông tin kỹ thuật khác</li>
          <li><strong>Thông tin mạng:</strong> Địa chỉ IP, nhà cung cấp dịch vụ Internet, loại kết nối, và thông tin mạng khác</li>
          <li><strong>Thông tin sử dụng:</strong> Các trang bạn truy cập, thời gian truy cập, thời gian ở lại, các liên kết bạn nhấp vào, và các hành động bạn thực hiện trên trang web</li>
          <li><strong>Thông tin vị trí:</strong> Vị trí địa lý của bạn (nếu bạn cho phép) để cung cấp các dịch vụ được cá nhân hóa</li>
          <li><strong>Cookie và công nghệ theo dõi:</strong> Thông tin được thu thập thông qua cookie, pixel tags, và các công nghệ theo dõi khác</li>
        </ul>
        <h3 className="privacy-subtitle">2.3. Thông Tin Từ Bên Thứ Ba</h3>
        <p className="privacy-text">
          Chúng tôi có thể nhận thông tin về bạn từ các nguồn khác, bao gồm:
        </p>
        <ul className="privacy-list">
          <li><strong>Mạng xã hội:</strong> Nếu bạn đăng nhập thông qua tài khoản mạng xã hội (Facebook, Google, v.v.), chúng tôi có thể nhận thông tin từ các nền tảng đó</li>
          <li><strong>Nhà cung cấp dịch vụ:</strong> Các nhà cung cấp dịch vụ đối tác của chúng tôi có thể chia sẻ thông tin về các giao dịch và tương tác của bạn với họ</li>
          <li><strong>Nhà cung cấp dịch vụ của chúng tôi:</strong> Các nhà cung cấp dịch vụ của bên thứ ba giúp chúng tôi vận hành dịch vụ có thể cung cấp thông tin về bạn</li>
          <li><strong>Cơ quan chính phủ:</strong> Trong một số trường hợp, chúng tôi có thể nhận thông tin từ các cơ quan chính phủ hoặc cơ quan quản lý</li>
        </ul>
      </div>

      <div
        id="section-3"
        ref={(el) => { sectionRefs.current['section-3'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">3. Cách Chúng Tôi Sử Dụng Thông Tin</h2>
        <h3 className="privacy-subtitle">3.1. Mục Đích Sử Dụng</h3>
        <p className="privacy-text">
          Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:
        </p>
        <ul className="privacy-list">
          <li><strong>Cung cấp dịch vụ:</strong> Xử lý đặt chỗ của bạn, gửi xác nhận, và cung cấp các dịch vụ mà bạn yêu cầu</li>
          <li><strong>Cải thiện dịch vụ:</strong> Phân tích cách bạn sử dụng dịch vụ để cải thiện trải nghiệm người dùng và phát triển các tính năng mới</li>
          <li><strong>Giao tiếp:</strong> Gửi thông báo về đặt chỗ, cập nhật dịch vụ, phản hồi yêu cầu hỗ trợ, và các thông tin quan trọng khác</li>
          <li><strong>Cá nhân hóa:</strong> Tùy chỉnh nội dung, đề xuất, và quảng cáo dựa trên sở thích và hành vi của bạn</li>
          <li><strong>Bảo mật:</strong> Phát hiện, ngăn chặn, và xử lý các hoạt động gian lận, lạm dụng, hoặc vi phạm pháp luật</li>
          <li><strong>Tuân thủ pháp luật:</strong> Tuân thủ các nghĩa vụ pháp lý, quy định, và yêu cầu của cơ quan quản lý</li>
          <li><strong>Marketing:</strong> Gửi thông tin về ưu đãi, khuyến mãi, và các sản phẩm hoặc dịch vụ mới (với sự đồng ý của bạn)</li>
        </ul>
        <h3 className="privacy-subtitle">3.2. Cơ Sở Pháp Lý</h3>
        <p className="privacy-text">
          Chúng tôi xử lý thông tin của bạn dựa trên các cơ sở pháp lý sau:
        </p>
        <ul className="privacy-list">
          <li><strong>Sự đồng ý:</strong> Khi bạn đồng ý rõ ràng với việc xử lý thông tin của bạn cho một mục đích cụ thể</li>
          <li><strong>Thực hiện hợp đồng:</strong> Khi việc xử lý thông tin là cần thiết để thực hiện hợp đồng với bạn</li>
          <li><strong>Nghĩa vụ pháp lý:</strong> Khi chúng tôi có nghĩa vụ pháp lý để xử lý thông tin của bạn</li>
          <li><strong>Lợi ích hợp pháp:</strong> Khi việc xử lý là cần thiết cho lợi ích hợp pháp của chúng tôi hoặc bên thứ ba, miễn là không vi phạm quyền của bạn</li>
        </ul>
      </div>

      <div
        id="section-4"
        ref={(el) => { sectionRefs.current['section-4'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">4. Chia Sẻ Thông Tin</h2>
        <h3 className="privacy-subtitle">4.1. Chia Sẻ Với Nhà Cung Cấp Dịch Vụ</h3>
        <p className="privacy-text">
          Chúng tôi chia sẻ thông tin cần thiết với các nhà cung cấp dịch vụ đối tác (rạp chiếu phim, khách sạn, nhà hàng, v.v.) để thực hiện đặt chỗ của bạn và cung cấp dịch vụ. Thông tin được chia sẻ có thể bao gồm:
        </p>
        <ul className="privacy-list">
          <li>Tên và thông tin liên hệ của bạn</li>
          <li>Thông tin về đặt chỗ (ngày giờ, số lượng, yêu cầu đặc biệt)</li>
          <li>Thông tin thanh toán (nếu cần thiết)</li>
        </ul>
        <h3 className="privacy-subtitle">4.2. Chia Sẻ Với Nhà Cung Cấp Dịch Vụ Của Chúng Tôi</h3>
        <p className="privacy-text">
          Chúng tôi có thể chia sẻ thông tin với các nhà cung cấp dịch vụ của bên thứ ba giúp chúng tôi vận hành dịch vụ, bao gồm:
        </p>
        <ul className="privacy-list">
          <li><strong>Nhà cung cấp dịch vụ thanh toán:</strong> Để xử lý các giao dịch thanh toán</li>
          <li><strong>Nhà cung cấp dịch vụ lưu trữ:</strong> Để lưu trữ và quản lý dữ liệu</li>
          <li><strong>Nhà cung cấp dịch vụ phân tích:</strong> Để phân tích cách bạn sử dụng dịch vụ</li>
          <li><strong>Nhà cung cấp dịch vụ email:</strong> Để gửi email và thông báo</li>
          <li><strong>Nhà cung cấp dịch vụ bảo mật:</strong> Để bảo vệ dịch vụ khỏi các mối đe dọa bảo mật</li>
        </ul>
        <h3 className="privacy-subtitle">4.3. Chia Sẻ Vì Lý Do Pháp Lý</h3>
        <p className="privacy-text">
          Chúng tôi có thể tiết lộ thông tin của bạn nếu:
        </p>
        <ul className="privacy-list">
          <li>Được yêu cầu bởi pháp luật, quy định, lệnh của tòa án, hoặc cơ quan chính phủ</li>
          <li>Cần thiết để bảo vệ quyền, tài sản, hoặc an toàn của Booking Hub, người dùng, hoặc người khác</li>
          <li>Cần thiết để thực thi các điều khoản sử dụng hoặc chính sách của chúng tôi</li>
          <li>Cần thiết để phát hiện, ngăn chặn, hoặc xử lý các hoạt động gian lận hoặc vi phạm pháp luật</li>
        </ul>
        <h3 className="privacy-subtitle">4.4. Chuyển Giao Kinh Doanh</h3>
        <p className="privacy-text">
          Trong trường hợp Booking Hub tham gia vào một vụ sáp nhập, mua lại, hoặc bán tài sản, thông tin của bạn có thể được chuyển giao như một phần của giao dịch đó. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào trong quyền sở hữu hoặc việc sử dụng thông tin của bạn.
        </p>
        <h3 className="privacy-subtitle">4.5. Chúng Tôi Không Bán Thông Tin</h3>
        <p className="privacy-text">
          <strong>Quan trọng:</strong> Chúng tôi không bán, cho thuê, hoặc trao đổi thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào vì mục đích tiếp thị của họ mà không có sự đồng ý rõ ràng của bạn.
        </p>
      </div>

      <div
        id="section-5"
        ref={(el) => { sectionRefs.current['section-5'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">5. Bảo Mật Thông Tin</h2>
        <h3 className="privacy-subtitle">5.1. Biện Pháp Bảo Mật</h3>
        <p className="privacy-text">
          Chúng tôi sử dụng các biện pháp bảo mật kỹ thuật, vật lý, và tổ chức phù hợp để bảo vệ thông tin của bạn khỏi truy cập trái phép, sử dụng, tiết lộ, thay đổi, hoặc phá hủy, bao gồm:
        </p>
        <ul className="privacy-list">
          <li><strong>Mã hóa dữ liệu:</strong> Sử dụng công nghệ mã hóa SSL/TLS để bảo vệ thông tin trong quá trình truyền tải</li>
          <li><strong>Bảo mật máy chủ:</strong> Sử dụng các biện pháp bảo mật vật lý và kỹ thuật để bảo vệ máy chủ và cơ sở dữ liệu</li>
          <li><strong>Kiểm soát truy cập:</strong> Giới hạn quyền truy cập vào thông tin cá nhân chỉ cho những nhân viên, đối tác, và nhà thầu có nhu cầu hợp pháp</li>
          <li><strong>Giám sát và phát hiện:</strong> Sử dụng các công cụ giám sát và phát hiện để phát hiện và ngăn chặn các hoạt động đáng ngờ</li>
          <li><strong>Đánh giá bảo mật định kỳ:</strong> Thực hiện các đánh giá bảo mật định kỳ để xác định và khắc phục các lỗ hổng bảo mật</li>
          <li><strong>Đào tạo nhân viên:</strong> Đào tạo nhân viên về các thực hành bảo mật tốt nhất</li>
        </ul>
        <h3 className="privacy-subtitle">5.2. Giới Hạn Bảo Mật</h3>
        <p className="privacy-text">
          Mặc dù chúng tôi nỗ lực sử dụng các biện pháp bảo mật thương mại hợp lý, không có phương thức truyền tải qua Internet hoặc phương thức lưu trữ điện tử nào là 100% an toàn. Chúng tôi không thể đảm bảo tính bảo mật tuyệt đối của thông tin của bạn. Bạn sử dụng dịch vụ và cung cấp thông tin với rủi ro của chính bạn.
        </p>
        <h3 className="privacy-subtitle">5.3. Bảo Mật Tài Khoản</h3>
        <p className="privacy-text">
          Bạn chịu trách nhiệm duy trì tính bảo mật của thông tin đăng nhập tài khoản của bạn. Chúng tôi khuyến khích bạn:
        </p>
        <ul className="privacy-list">
          <li>Sử dụng mật khẩu mạnh và độc đáo</li>
          <li>Không chia sẻ thông tin đăng nhập của bạn với người khác</li>
          <li>Đăng xuất khỏi tài khoản sau mỗi lần sử dụng, đặc biệt trên các thiết bị công cộng</li>
          <li>Thông báo ngay lập tức cho chúng tôi nếu bạn nghi ngờ tài khoản của mình đã bị xâm phạm</li>
        </ul>
      </div>
      <style jsx>{`
        .privacy-section {
          margin-bottom: var(--spacing-4xl, 64px);
          scroll-margin-top: 100px;
        }

        .privacy-section-title {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-2xl, 24px);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-on-surface, #1a1a1a);
          margin-bottom: var(--spacing-xl, 24px);
          padding-bottom: var(--spacing-sm, 8px);
          border-bottom: 2px solid var(--color-border, #e5e5e5);
        }

        .privacy-subtitle {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-lg, 18px);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-on-surface, #1a1a1a);
          margin-top: var(--spacing-xl, 24px);
          margin-bottom: var(--spacing-md, 12px);
        }

        .privacy-text {
          font-size: var(--font-size-base, 16px);
          line-height: 1.8;
          color: var(--color-on-surface-secondary, #666666);
          margin-bottom: var(--spacing-md, 12px);
        }

        .privacy-list {
          margin: var(--spacing-lg, 16px) 0;
          padding-left: var(--spacing-2xl, 32px);
          color: var(--color-on-surface-secondary, #666666);
        }

        .privacy-list li {
          margin-bottom: var(--spacing-md, 12px);
          line-height: 1.8;
          font-size: var(--font-size-base, 16px);
        }
      `}</style>
    </>
  )
}

export default PrivacySectionsPart1