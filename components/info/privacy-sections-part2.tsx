import React from 'react'

interface PrivacySectionsPart2Props {
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>
}

const PrivacySectionsPart2: React.FC<PrivacySectionsPart2Props> = ({ sectionRefs }) => {
  return (
    <>
      <div
        id="section-6"
        ref={(el) => { sectionRefs.current['section-6'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">6. Quyền Của Bạn</h2>
        <h3 className="privacy-subtitle">6.1. Quyền Truy Cập</h3>
        <p className="privacy-text">
          Bạn có quyền yêu cầu truy cập vào thông tin cá nhân mà chúng tôi lưu trữ về bạn. Bạn có thể yêu cầu một bản sao của thông tin cá nhân của bạn bằng cách liên hệ với chúng tôi.
        </p>
        <h3 className="privacy-subtitle">6.2. Quyền Chỉnh Sửa</h3>
        <p className="privacy-text">
          Bạn có quyền yêu cầu chỉnh sửa hoặc cập nhật thông tin cá nhân không chính xác hoặc không đầy đủ. Bạn có thể cập nhật thông tin của mình thông qua tài khoản của bạn hoặc liên hệ với chúng tôi.
        </p>
        <h3 className="privacy-subtitle">6.3. Quyền Xóa</h3>
        <p className="privacy-text">
          Bạn có quyền yêu cầu xóa thông tin cá nhân của bạn, với điều kiện chúng tôi không có nghĩa vụ pháp lý hoặc lý do hợp pháp khác để giữ lại thông tin đó. Lưu ý rằng việc xóa thông tin có thể ảnh hưởng đến khả năng sử dụng một số tính năng của dịch vụ.
        </p>
        <h3 className="privacy-subtitle">6.4. Quyền Phản Đối</h3>
        <p className="privacy-text">
          Bạn có quyền phản đối việc xử lý thông tin cá nhân của bạn cho một số mục đích nhất định, bao gồm tiếp thị trực tiếp. Bạn có thể thực hiện quyền này bằng cách cập nhật cài đặt tài khoản của bạn hoặc liên hệ với chúng tôi.
        </p>
        <h3 className="privacy-subtitle">6.5. Quyền Rút Lại Đồng Ý</h3>
        <p className="privacy-text">
          Nếu việc xử lý thông tin của bạn dựa trên sự đồng ý, bạn có quyền rút lại đồng ý đó bất cứ lúc nào. Việc rút lại đồng ý sẽ không ảnh hưởng đến tính hợp pháp của việc xử lý trước khi bạn rút lại đồng ý.
        </p>
        <h3 className="privacy-subtitle">6.6. Quyền Di Chuyển Dữ Liệu</h3>
        <p className="privacy-text">
          Bạn có quyền nhận thông tin cá nhân của bạn trong một định dạng có cấu trúc, thường dùng và có thể đọc được bằng máy, và có quyền truyền thông tin đó cho một bên điều khiển dữ liệu khác.
        </p>
        <h3 className="privacy-subtitle">6.7. Cách Thực Hiện Quyền</h3>
        <p className="privacy-text">
          Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi thông qua thông tin liên hệ được cung cấp trong phần &quot;Liên Hệ&quot; của chính sách này. Chúng tôi sẽ phản hồi yêu cầu của bạn trong thời gian hợp lý và theo quy định của pháp luật hiện hành.
        </p>
      </div>

      <div
        id="section-7"
        ref={(el) => { sectionRefs.current['section-7'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">7. Cookie và Công Nghệ Theo Dõi</h2>
        <h3 className="privacy-subtitle">7.1. Cookie là gì?</h3>
        <p className="privacy-text">
          Cookie là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn khi bạn truy cập trang web. Cookie giúp chúng tôi cải thiện trải nghiệm của bạn, phân tích cách bạn sử dụng dịch vụ, và cung cấp các tính năng được cá nhân hóa.
        </p>
        <h3 className="privacy-subtitle">7.2. Các Loại Cookie Chúng Tôi Sử Dụng</h3>
        <p className="privacy-text">
          Chúng tôi sử dụng các loại cookie sau:
        </p>
        <ul className="privacy-list">
          <li><strong>Cookie cần thiết:</strong> Các cookie này là cần thiết để trang web hoạt động và không thể tắt trong hệ thống của chúng tôi. Chúng thường chỉ được đặt để phản hồi các hành động của bạn.</li>
          <li><strong>Cookie hiệu suất:</strong> Các cookie này cho phép chúng tôi đếm số lượt truy cập và nguồn lưu lượng truy cập để chúng tôi có thể đo lường và cải thiện hiệu suất của trang web.</li>
          <li><strong>Cookie chức năng:</strong> Các cookie này cho phép trang web cung cấp chức năng và cá nhân hóa nâng cao, chẳng hạn như ghi nhớ tên người dùng và sở thích của bạn.</li>
          <li><strong>Cookie quảng cáo:</strong> Các cookie này có thể được đặt bởi các nhà quảng cáo của chúng tôi để xây dựng hồ sơ về sở thích của bạn và hiển thị quảng cáo liên quan trên các trang web khác.</li>
        </ul>
        <h3 className="privacy-subtitle">7.3. Quản Lý Cookie</h3>
        <p className="privacy-text">
          Bạn có thể quản lý hoặc xóa cookie thông qua cài đặt trình duyệt của bạn. Tuy nhiên, việc vô hiệu hóa cookie có thể ảnh hưởng đến chức năng của trang web và có thể ngăn bạn sử dụng một số tính năng.
        </p>
      </div>

      <div
        id="section-8"
        ref={(el) => { sectionRefs.current['section-8'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">8. Bảo Vệ Trẻ Em</h2>
        <p className="privacy-text">
          Dịch vụ của chúng tôi không dành cho trẻ em dưới 18 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới 18 tuổi mà không có sự đồng ý của cha mẹ hoặc người giám hộ.
        </p>
        <p className="privacy-text">
          Nếu bạn là cha mẹ hoặc người giám hộ và bạn tin rằng con bạn đã cung cấp thông tin cá nhân cho chúng tôi mà không có sự đồng ý của bạn, vui lòng liên hệ với chúng tôi ngay lập tức. Nếu chúng tôi phát hiện rằng chúng tôi đã thu thập thông tin từ trẻ em dưới 18 tuổi mà không có sự đồng ý của cha mẹ, chúng tôi sẽ xóa thông tin đó ngay lập tức.
        </p>
      </div>

      <div
        id="section-9"
        ref={(el) => { sectionRefs.current['section-9'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">9. Thay Đổi Chính Sách</h2>
        <h3 className="privacy-subtitle">9.1. Quyền Thay Đổi</h3>
        <p className="privacy-text">
          Chúng tôi có thể cập nhật chính sách bảo mật này từ time to time để phản ánh các thay đổi trong thực tiễn của chúng tôi, công nghệ, yêu cầu pháp lý, hoặc vì các lý do khác. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi quan trọng nào bằng cách đăng chính sách mới trên trang web và cập nhật ngày &quot;Cập nhật lần cuối&quot; ở đầu chính sách này.
        </p>
        <h3 className="privacy-subtitle">9.2. Thông Báo Thay Đổi</h3>
        <p className="privacy-text">
          Khi chúng tôi thực hiện các thay đổi quan trọng đối với chính sách này, chúng tôi sẽ cố gắng thông báo cho bạn bằng một hoặc nhiều phương thức sau:
        </p>
        <ul className="privacy-list">
          <li>Gửi email thông báo đến địa chỉ email mà bạn đã đăng ký</li>
          <li>Hiển thị thông báo nổi bật trên trang web hoặc trong ứng dụng</li>
          <li>Đăng thông báo trên trang chủ hoặc trang chính sách bảo mật</li>
        </ul>
        <h3 className="privacy-subtitle">9.3. Chấp Nhận Thay Đổi</h3>
        <p className="privacy-text">
          Việc bạn tiếp tục sử dụng dịch vụ sau khi chính sách được cập nhật được coi là bạn đã đọc, hiểu, và chấp nhận chính sách mới. Nếu bạn không đồng ý với các thay đổi, bạn có thể ngừng sử dụng dịch vụ và yêu cầu xóa tài khoản của bạn.
        </p>
        <h3 className="privacy-subtitle">9.4. Xem Xét Định Kỳ</h3>
        <p className="privacy-text">
          Chúng tôi khuyến khích bạn xem xét chính sách bảo mật này định kỳ để đảm bảo bạn luôn nhận thức được cách chúng tôi bảo vệ thông tin của bạn.
        </p>
      </div>

      <div
        id="section-10"
        ref={(el) => { sectionRefs.current['section-10'] = el }}
        className="privacy-section"
      >
        <h2 className="privacy-section-title">10. Liên Hệ</h2>
        <p className="privacy-text">
          Nếu bạn có bất kỳ câu hỏi, thắc mắc, hoặc yêu cầu nào về chính sách bảo mật này hoặc cách chúng tôi xử lý thông tin của bạn, vui lòng liên hệ với chúng tôi thông qua các kênh sau:
        </p>
        <div className="contact-info">
          <p className="privacy-text"><strong>Email hỗ trợ:</strong> manhtrana1k45tl@gmail.com</p>
          <p className="privacy-text"><strong>Hotline:</strong> +84389891942 (Từ 8:00 - 22:00 hàng ngày, tất cả các ngày trong tuần)</p>
          <p className="privacy-text"><strong>Địa chỉ trụ sở:</strong> Mộ Lao, Hà Đông, Hà Nội, Việt Nam</p>
          <p className="privacy-text"><strong>Thời gian làm việc:</strong> Thứ Hai - Chủ Nhật: 8:00 - 22:00 (Giờ Việt Nam)</p>
        </div>
        <h3 className="privacy-subtitle">10.1. Thời Gian Phản Hồi</h3>
        <p className="privacy-text">
          Chúng tôi cam kết phản hồi các yêu cầu của bạn một cách nhanh chóng và hiệu quả:
        </p>
        <ul className="privacy-list">
          <li><strong>Email:</strong> Chúng tôi sẽ phản hồi email của bạn trong vòng 24-48 giờ làm việc</li>
          <li><strong>Hotline:</strong> Đội ngũ hỗ trợ của chúng tôi sẵn sàng trả lời cuộc gọi của bạn trong giờ làm việc</li>
          <li><strong>Yêu cầu về quyền riêng tư:</strong> Chúng tôi sẽ xử lý các yêu cầu về quyền riêng tư của bạn trong vòng 30 ngày theo quy định của pháp luật</li>
        </ul>
        <h3 className="privacy-subtitle">10.2. Khiếu Nại</h3>
        <p className="privacy-text">
          Nếu bạn không hài lòng với cách chúng tôi xử lý thông tin của bạn hoặc phản hồi yêu cầu của bạn, bạn có quyền khiếu nại với cơ quan quản lý dữ liệu có thẩm quyền tại Việt Nam.
        </p>
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

        .contact-info {
          background-color: var(--color-surface-secondary, #f9fafb);
          padding: var(--spacing-xl, 24px);
          border-radius: var(--border-radius-md, 8px);
          margin: var(--spacing-xl, 24px) 0;
          border-left: 4px solid var(--color-primary, #3b82f6);
        }
      `}</style>
    </>
  )
}

export default PrivacySectionsPart2